from fastapi import FastAPI, HTTPException
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel

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

class MessageQuery(BaseModel):
    model: str
    message: str

@app.get("/")
def home():
    return { "status": "OK", "API version": __version__ }

@app.post("/chat/completions")
def chat_completion(msg_query: MessageQuery):
    if msg_query.model == "synapse-copilot":
        try:
            main(msg_query.message)
            with open("output.json", "r") as json_file:
                data = json.load(json_file)
            return { "data": data }
        except Exception as e:
            # Log the exception for debugging purposes
            print(str(e))
            # Return an error response to the client
            raise HTTPException(status_code=500, detail=str(e))
    else:
        raise HTTPException(status_code=404, detail=f"Model {msg_query.model} not found.")
