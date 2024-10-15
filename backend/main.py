from fastapi import FastAPI, Query, HTTPException
from pydantic import BaseModel
from typing import Optional

app = FastAPI(
    title="POSアプリAPI",
    description="POSアプリのAPI仕様です。",
    version="0.0.1",
)

class Product(BaseModel):
    code: int
    name: str
    price: int

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}

@app.get("/get-products", summary="商品情報取得API")
def get_products(code: int = Query(..., description="バーコードから読み取ったコード")):
    if code == 12345:
        return {"code": code, "name": "コーラ", "price": 120}
    else:
        raise HTTPException(status_code=404, detail="商品が見つかりませんでした")