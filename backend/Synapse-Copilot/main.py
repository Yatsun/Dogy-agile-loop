from fastapi import FastAPI, HTTPException
from starlette.middleware.cors import CORSMiddleware

from typing import List, Dict
import json

from run import main

__version__ = "0.1.0"
app = FastAPI()

# Handling CORS
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/")
def home():
    return { "status": "OK", "API version": __version__ }

@app.post("/chat/completions")
def chat_completion(model: str, message: str):
    if model == "synapse-copilot":
        main(message)
        data = None
        with open("output.json", "r") as json_file:
            data = json.load(json_file)
        return { "data": data }
    else:
        raise HTTPException(status_code=404, detail=f"Model {model} not found.")
