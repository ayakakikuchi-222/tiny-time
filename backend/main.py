from fastapi import FastAPI, HTTPException
# CORS用の機能を読み込む（Cross-Origin Resource Sharing）
from fastapi.middleware.cors import CORSMiddleware

# FastAPIのアプリ本体を作る
app = FastAPI()

# React（localhost:5173）からのアクセスを許可する
app.add_middleware(
    CORSMiddleware,
    # のちのち本番のURLに置き換える
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# まずは Python のリストでデータを持つ（あとでデータベースに置き換えられる）
ACTIVITIES = [
    {
        "id": 1,
        "name": "Drink a glass of water slowly",
        "location": ["home", "work", "outside"],
        "energy": ["low", "medium", "high"],
        "goal": ["relax", "refresh", "I don't know"],
    },
    {
        "id": 2,
        "name": "Stretch for 5 minutes",
        "location": ["home", "work"],
        "energy": ["low", "medium"],
        "goal": ["relax", "refresh", "I don't know"],
    },
    {
        "id": 3,
        "name": "Read 10 pages of a book",
        "location": ["home", "outside"],
        "energy": ["low", "medium"],
        "goal": ["relax", "learn", "I don't know"],
    },
    {
        "id": 4,
        "name": "Take a short walk",
        "location": ["home", "work", "outside"],
        "energy": ["medium", "high"],
        "goal": ["relax", "refresh", "I don't know"],
    },
    {
        "id": 5,
        "name": "Clear your inbox",
        "location": ["home", "work"],
        "energy": ["medium", "high"],
        "goal": ["productive", "I don't know"],
    },
    {
        "id": 6,
        "name": "Write down three things on your mind",
        "location": ["home", "work", "outside"],
        "energy": ["low", "medium"],
        "goal": ["relax", "productive", "refresh", "I don't know"],
    },
    {
        "id": 7,
        "name": "Learn one new word",
        "location": ["home", "work", "outside"],
        "energy": ["low", "medium"],
        "goal": ["learn", "I don't know"],
    },
    {
        "id": 8,
        "name": "Tidy one tiny area",
        "location": ["home", "work"],
        "energy": ["medium", "high"],
        "goal": ["productive", "refresh", "I don't know"],
    },
    {
        "id": 9,
        "name": "Listen to one song without doing anything else",
        "location": ["home", "work", "outside"],
        "energy": ["low", "medium"],
        "goal": ["relax", "refresh", "I don't know"],
    },
    {
        "id": 10,
        "name": "Write a tiny to-do list with only three items",
        "location": ["home", "work"],
        "energy": ["low", "medium"],
        "goal": ["productive", "I don't know"],
    },
    {
        "id": 11,
        "name": "Stretch like a cat",
        "location": ["home", "work"],
        "energy": ["low", "medium"],
        "goal": ["relax", "refresh", "I don't know"],
    },
    {
        "id": 12,
        "name": "Learn one completely unnecessary fact",
        "location": ["home", "work", "outside"],
        "energy": ["low", "medium"],
        "goal": ["learn", "refresh", "I don't know"],
    },
    {
        "id": 13,
        "name": "Find five things around you that are the same color",
        "location": ["home", "work", "outside"],
        "energy": ["low", "medium"],
        "goal": ["refresh", "I don't know"],
    },
    {
        "id": 14,
        "name": "Take a different route than usual",
        "location": ["outside"],
        "energy": ["medium", "high"],
        "goal": ["refresh", "learn", "I don't know"],
    },
    {
        "id": 15,
        "name": "Do a 5-minute training montage",
        "location": ["home", "outside"],
        "energy": ["high"],
        "goal": ["productive", "refresh", "I don't know"],
    },
    {
        "id": 16,
        "name": "Describe your day in exactly five words",
        "location": ["home", "work", "outside"],
        "energy": ["low", "medium"],
        "goal": ["relax", "refresh", "I don't know"],
    },
    {
        "id": 17,
        "name": "Take one photo of something interesting around you",
        "location": ["home", "work", "outside"],
        "energy": ["low", "medium", "high"],
        "goal": ["refresh", "learn", "I don't know"],
    },
    {
        "id": 18,
        "name": "Watch a short video about something you've always wondered about",
        "location": ["home", "work"],
        "energy": ["low", "medium"],
        "goal": ["learn", "refresh", "I don't know"],
    },
    {
        "id": 19,
        "name": "Put your phone away for 10 minutes",
        "location": ["home", "work", "outside"],
        "energy": ["low", "medium", "high"],
        "goal": ["relax", "productive", "refresh", "I don't know"],
    },
    {
        "id": 20,
        "name": "Pick one task you've been avoiding and do the tiniest possible first step",
        "location": ["home", "work"],
        "energy": ["low", "medium", "high"],
        "goal": ["productive", "I don't know"],
    },
]

@app.get("/activity")
def get_activity(location: str, energy: str, goal: str):
    for activity in ACTIVITIES:
        if (
            location in activity["location"]
            and activity["energy"] == energy
            and (goal == "I don't know" or activity["goal"] == goal)
        ):
            return activity

    raise HTTPException(status_code=404, detail="No matching activity")
