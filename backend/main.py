from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import librosa
import numpy as np
import tempfile

app = FastAPI()

# Allow frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "Song Riyaz Backend Running"
    }

@app.post("/detect-bpm")
async def detect_bpm(file: UploadFile = File(...)):

    with tempfile.NamedTemporaryFile(delete=False) as temp_audio:
        temp_audio.write(await file.read())
        temp_path = temp_audio.name

    y, sr = librosa.load(temp_path)

    tempo, _ = librosa.beat.beat_track(y=y, sr=sr)

    return {
        "bpm": round(float(tempo[0]), 2)
    }

@app.post("/detect-key")
async def detect_key(file: UploadFile = File(...)):

    with tempfile.NamedTemporaryFile(delete=False) as temp_audio:
        temp_audio.write(await file.read())
        temp_path = temp_audio.name

    y, sr = librosa.load(temp_path)

    chroma = librosa.feature.chroma_stft(y=y, sr=sr)

    chroma_mean = np.mean(chroma, axis=1)

    notes = ['C', 'C#', 'D', 'D#', 'E', 'F',
             'F#', 'G', 'G#', 'A', 'A#', 'B']

    key_index = np.argmax(chroma_mean)

    detected_key = notes[key_index]

    return {
        "key": detected_key
    }