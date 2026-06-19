from fastapi import FastAPI, UploadFile, File
import tempfile
import librosa
import numpy as np

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

    with tempfile.NamedTemporaryFile(delete=False) as temp_audio:

        temp_audio.write(await file.read())

        temp_path = temp_audio.name

    y, sr = librosa.load(
        temp_path,
        sr=22050,
        mono=True,
        duration=120
    )

    y_harmonic, y_percussive = librosa.effects.hpss(y)

    chroma = librosa.feature.chroma_cens(
        y=y_harmonic,
        sr=sr
    )

    chroma_mean = np.mean(chroma, axis=1)

    major_profile = np.array([
        6.35, 2.23, 3.48, 2.33,
        4.38, 4.09, 2.52, 5.19,
        2.39, 3.66, 2.29, 2.88
    ])

    minor_profile = np.array([
        6.33, 2.68, 3.52, 5.38,
        2.60, 3.53, 2.54, 4.75,
        3.98, 2.69, 3.34, 3.17
    ])

    notes = [
        "C","C#","D","D#","E","F",
        "F#","G","G#","A","A#","B"
    ]

    best_score = -999
    best_key = ""

    for i in range(12):

        major_score = np.corrcoef(
            chroma_mean,
            np.roll(major_profile, i)
        )[0, 1]

        minor_score = np.corrcoef(
            chroma_mean,
            np.roll(minor_profile, i)
        )[0, 1]

        print("BEFORE:", notes[i], best_score)

        print(
            notes[i],
            "major:",
            round(major_score, 3),
            "minor:",
            round(minor_score, 3)
        )

        if major_score > best_score:
            print("MAJOR WON")
            best_score = major_score
            best_key = notes[i]
            print("NEW BEST:", best_key, best_score)

        if minor_score > best_score:
            print("MINOR WON")
            best_score = minor_score
            best_key = notes[i] + "m"
            print("NEW BEST:", best_key, best_score)

    print("FINAL KEY:", best_key)

    detected_key = best_key

    return {
        "key": detected_key
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