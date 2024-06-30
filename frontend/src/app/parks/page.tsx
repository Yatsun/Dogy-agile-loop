"use client";

import { useState, useMemo } from "react";
import { Input } from "@/ui/input";

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("");
  const [parks, setParks] = useState([
    {
      id: 1,
      name: "Central Park",
      description:
        "A large urban park in New York City, famous for its lakes, paths, and attractions.",
      location: "New York, NY",
      latitude: 40.7828,
      longitude: -73.9653,
    },
    {
      id: 2,
      name: "Griffith Park",
      description:
        "A large urban park in Los Angeles, known for its hiking trails, observatory, and views of the city.",
      location: "Los Angeles, CA",
      latitude: 34.1222,
      longitude: -118.3008,
    },
    {
      id: 3,
      name: "Golden Gate Park",
      description:
        "A large urban park in San Francisco, featuring gardens, museums, and recreational facilities.",
      location: "San Francisco, CA",
      latitude: 37.7697,
      longitude: -122.4683,
    },
    {
      id: 4,
      name: "Millennium Park",
      description:
        "A popular urban park in Chicago, known for its iconic architecture and public art.",
      location: "Chicago, IL",
      latitude: 41.8819,
      longitude: -87.6231,
    },
    {
      id: 5,
      name: "Discovery Green",
      description:
        "A large urban park in Houston, offering a variety of recreational activities and events.",
      location: "Houston, TX",
      latitude: 29.7604,
      longitude: -95.3698,
    },
    {
      id: 6,
      name: "Piedmont Park",
      description:
        "A large urban park in Atlanta, featuring green spaces, lakes, and event venues.",
      location: "Atlanta, GA",
      latitude: 33.7809,
      longitude: -84.3783,
    },
  ]);
  const filteredParks = useMemo(() => {
    return parks.filter((park) =>
      park.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [parks, searchTerm]);
  return (
    <div className="w-full min-h-screen bg-orange-100 py-12 md:py-16 lg:py-20">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Explore Local Parks
          </h1>
          <div className="w-full max-w-md">
            <Input
              type="text"
              placeholder="Search parks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {filteredParks.map((park) => (
            <div
              key={park.id}
              className="bg-white rounded-lg shadow-md overflow-hidden bg-yellow-100"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <ParkingMeterIcon className="w-16 h-16 text-gray-500" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {park.name}
                </h3>
                <p className="text-gray-600 mb-4">{park.description}</p>
                <div className="flex items-center text-gray-500">
                  <MapPinIcon className="w-4 h-4 mr-2" />
                  <span>{park.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        {/* <div className="h-[500px] w-full">
          {filteredParks.map((park) => (
            <Marker key={park.id} position={{ lat: park.latitude, lng: park.longitude }} title={park.name} />
          ))}
        </div> !need to check on it later*/}
      </div>
    </div>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ParkingMeterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 9a3 3 0 1 1 6 0" />
      <path d="M12 12v3" />
      <path d="M11 15h2" />
      <path d="M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3" />
      <path d="M12 19v3" />
    </svg>
  );
}
