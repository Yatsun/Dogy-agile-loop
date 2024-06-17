from dotenv import load_dotenv
from pathlib import Path
from typing import List
from dataclasses import asdict
import os

from business_info.yelp import YelpHandler
from business_info._types import Business
from business_info.database import Database

__version__ = '0.1.0'

# Goes back to root directory ".."
ROOT_DIR: str = Path(__file__).resolve(strict=True).parent.parent

# Load environment variables from .env file if it exists
load_dotenv(f"{ROOT_DIR}/.env")
yelp_api_key: str = os.getenv('YELP_API_KEY')
mongodb_url: str = os.getenv('MONGODB_URL')

def main() -> None:
    # Calling Yelp's API and deserializing it
    yelp: YelpHandler = YelpHandler(yelp_api_key)
    yelp_response: YelpHandler = yelp.call_api("Sweden").deserialize_json()
    businesses: List[Business] = yelp_response.get_businesses()
    business_ids: List[int] = [business.id for business in businesses]
    businesses_as_list: List[dict] = [asdict(business) for business in businesses]

    # Database and collection name
    db: str = "business"
    collection: str = "restaurant"

    database: Database = Database(mongodb_url).connect_db() \
                                              .set_collection(db, collection)

    # Query the database for existing ID
    existing_ids = database.collection.find({"_id": {"$in": business_ids}}, {"_id": 1})
    existing_ids_list = [doc["_id"] for doc in existing_ids]

    # Filter out documents that aren't in the database yet
    new_documents = [doc for doc in businesses_as_list if doc["id"] not in existing_ids_list]

    if new_documents:
        database.collection.insert_many(new_documents)
        print(f"Inserted {len(new_documents)} documents successfully to database: {db}, collection: {collection}")
    else:
        print("No documents were inserted in the database")

if __name__ == '__main__':
    main()
