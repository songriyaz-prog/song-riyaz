import sys
import os

sys.path.append(
    os.path.abspath(
        os.path.join(
            os.path.dirname(__file__),
            "..",
            "skey-main"
        )
    )
)

from fastapi.responses import FileResponse
from fastapi import FastAPI, UploadFile, File, Form
import tempfile
import librosa
import numpy as np
import soundfile as sf
# from skey import detect_key as skey_detect_key
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def home():
    return {
        "message": "Song Riyaz V2 Backend Running"
    }

@app.post("/detect-bpm")
async def detect_bpm(file: UploadFile = File(...)):

    with tempfile.NamedTemporaryFile(delete=False) as temp_audio:

        temp_audio.write(await file.read())

        temp_path = temp_audio.name

    y, sr = librosa.load(
    temp_path,
    sr=22050,
    mono=True,
    duration=120
)

    onset_env = librosa.onset.onset_strength(
        y=y,
        sr=sr
)

    tempo = librosa.feature.tempo(
    onset_envelope=onset_env,
    sr=sr,
    aggregate=np.median
)

    tempo = float(tempo[0])

    print("RAW BPM:", tempo)

    if tempo > 160:
        tempo = tempo / 2

    if tempo < 70:
        tempo = tempo * 2

    if 60 <= tempo <= 68:
        tempo = tempo * 2

    if 118 <= tempo <= 132:
        tempo = tempo * 1.0

    return {
        "bpm": round(tempo, 2)
    }

@app.post("/detect-key")
async def detect_key(file: UploadFile = File(...)):

    with tempfile.NamedTemporaryFile(
        delete=False,
        suffix=".mp3"
    ) as temp_audio:

        temp_audio.write(await file.read())
        temp_path = temp_audio.name

    result = skey_detect_key(
        audio_path=temp_path
    )

    return {
        "key": result[0]
    }

@app.post("/analyze-song")
async def analyze_song(file: UploadFile = File(...)):

    bpm_result = await detect_bpm(file)

    file.file.seek(0)

    key_result = await detect_key(file)

    return {
        "bpm": bpm_result["bpm"],
        "key": key_result["key"]
    }

@app.post("/pitch-shift")
async def pitch_shift(
    file: UploadFile = File(...),
    semitones: int = Form(...)
):

    with tempfile.NamedTemporaryFile(
        delete=False,
        suffix=".mp3"
    ) as temp_audio:

        temp_audio.write(await file.read())
        temp_path = temp_audio.name

    y, sr = librosa.load(
        temp_path,
        sr=None,
        mono=True
    )

    y_shifted = librosa.effects.pitch_shift(
        y=y,
        sr=sr,
        n_steps=semitones
    )

    original_peak = np.max(np.abs(y))
    shifted_peak = np.max(np.abs(y_shifted))

    if shifted_peak > 0:
        y_shifted = y_shifted * (original_peak / shifted_peak)

    print("ORIGINAL MAX:", np.max(np.abs(y)))
    print("SHIFTED MAX:", np.max(np.abs(y_shifted)))

    output_path = temp_path.replace(".mp3", "_shifted.wav")
    print("OUTPUT FILE:", output_path)

    sf.write(
        output_path,
        y_shifted,
        sr
    )

    import os
    print("FILE EXISTS:", os.path.exists(output_path))
    print("OUTPUT FILE:", output_path)

    return FileResponse(
    output_path,
    media_type="audio/wav",
    filename="shifted.wav"
)
