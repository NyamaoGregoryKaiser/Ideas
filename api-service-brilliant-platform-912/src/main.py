from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import uvicorn
from datetime import datetime
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="api-service-brilliant-platform-912",
    description="A modern API service built with FastAPI",
    version="1.0.0"
)

class User(BaseModel):
    id: int
    name: str
    email: str

# In-memory database
users = [
    User(id=1, name="John Doe", email="john@example.com"),
    User(id=2, name="Jane Smith", email="jane@example.com")
]

@app.get("/")
async def root():
    return {"message": "Welcome to api-service-brilliant-platform-912 API"}

@app.get("/api/health")
async def health_check():
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat()
    }

@app.get("/api/users", response_model=List[User])
async def get_users():
    return users

@app.get("/api/users/{user_id}", response_model=User)
async def get_user(user_id: int):
    user = next((user for user in users if user.id == user_id), None)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)