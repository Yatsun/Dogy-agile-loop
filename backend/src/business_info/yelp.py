from gql import gql, Client
from gql.transport.requests import RequestsHTTPTransport

from typing import List, Self
import os

from ._types import SearchQueryResponse, BusinessResponse, Business

class YelpHandler:
    def __init__(self, api_key):
        self.api_key = api_key
        self.response: dict = {}
        self.deserialized_response: SearchQueryResponse = {}

    def call_api(self, location) -> Self: # Location must be string
        # Define the GraphQL endpoint
        url = 'https://api.yelp.com/v3/graphql'

        # Define the GraphQL query
        query = gql(f"""query Restaurant {{
        search(
            term: "dog friendly"
            sort_by: "distance"
            categories: "restaurants"
            location: "{location}"
            limit: 20
        ) {{
            business {{
            id
            name
            coordinates {{
                latitude
                longitude
            }}
            url
            distance
            photos
            price
            phone
            rating
            }}
            total
        }}
        }}
        """)

        transport = RequestsHTTPTransport(
            url=url,
            headers={'Authorization': f'Bearer {self.api_key}'},
            use_json=True,
        )

        # Create a GraphQL client using the defined transport
        client = Client(transport=transport, fetch_schema_from_transport=True)
        self.response = client.execute(query)
        return self

    def deserialize_json(self) -> Self:
        self.deserialized_json = SearchQueryResponse(**self.response)
        print(self.deserialized_json) #TODO: remove this later
        return self

    def get_businesses(self) -> List[Business]:
        return self.deserialized_json.search.business

    def get_total(self) -> int:
        return self.deserialized_json.search.total

    def get_json(self) -> SearchQueryResponse:
        return self.deserialized_json
