from fastapi import FastAPI, UploadFile, File
import tempfile
import librosa
import numpy as np
from skey import detect_key as skey_detect_key

app = FastAPI()

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