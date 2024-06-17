from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson.objectid import ObjectId

from typing import Self

class Database:
    def __init__(self, url: str):
        self.url: str = url
        self.__client = None
        self.database = None
        self.collection = None

    def connect_db(self) -> Self:
        self.__client = MongoClient(self.url, authMechanism='SCRAM-SHA-1')
        return self

    def set_collection(self, db: str, collection: str) -> Self:
        self.database: MongoClient = self.__client.get_database(db)
        self.collection: MongoClient = self.database.get_collection(collection)
        return self

    def insert_many(self, documents) -> Self:
        self.collection.insert_many(documents)
        return self
