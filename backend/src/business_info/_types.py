from dataclasses import dataclass, asdict
from typing import List
import json

@dataclass
class Coordinates:
    latitude: float
    longitude: float

@dataclass
class Business:
    id: str
    name: str
    coordinates: Coordinates
    url: str
    distance: float
    photos: List[str]
    price: str
    phone: str
    rating: float

    def __post_init__(self):
        self.coordinates = Coordinates(**self.coordinates)

@dataclass
class BusinessResponse:
    business: List[Business]
    total: int

    def __post_init__(self):
        self.business = [Business(**_business) for _business in self.business]

@dataclass
class SearchQueryResponse:
    search: BusinessResponse

    def __post_init__(self):
        self.search = BusinessResponse(**self.search)
