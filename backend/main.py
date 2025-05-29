from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/news")
def get_news(region: str = Query("us")):
    # 模擬即時新聞
    return [{"title": f"{region.upper()} 最新新聞 1"}, {"title": f"{region.upper()} 最新新聞 2"}]

@app.get("/api/indicators")
def get_indicators(region: str = Query("us")):
    # 模擬指標數據
    return [{"name": "VIX", "value": "18.5"}, {"name": "Put/Call Ratio", "value": "0.95"}]