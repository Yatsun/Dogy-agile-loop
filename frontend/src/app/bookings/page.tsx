"use client";

import { useState, useMemo } from "react";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/ui/table";

export default function Component() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState({ key: "name", order: "asc" });
  const bookings = [
    {
      id: 1,
      name: "John Doe",
      type: "Restaurant",
      date: "2023-06-01",
      status: "Confirmed",
    },
    {
      id: 2,
      name: "Jane Smith",
      type: "Dog Park",
      date: "2023-06-05",
      status: "Pending",
    },
    {
      id: 3,
      name: "Bob Johnson",
      type: "Veterinarian",
      date: "2023-06-10",
      status: "Cancelled",
    },
    {
      id: 4,
      name: "Sarah Lee",
      type: "Restaurant",
      date: "2023-06-15",
      status: "Confirmed",
    },
    {
      id: 5,
      name: "Tom Wilson",
      type: "Dog Park",
      date: "2023-06-20",
      status: "Pending",
    },
  ];
  const filteredBookings = useMemo(() => {
    return bookings
      .filter((booking) =>
        booking.name.toLowerCase().includes(search.toLowerCase()),
      )
      .sort((a: any, b: any) => {
        // FIXME: Refactor any to specific type
        if (sort.order === "asc") {
          return a[sort.key] > b[sort.key] ? 1 : -1;
        } else {
          return a[sort.key] < b[sort.key] ? 1 : -1;
        }
      });
  }, [search, sort]);
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  const handleSort = (key: any) => {
    if (sort.key === key) {
      setSort({ key, order: sort.order === "asc" ? "desc" : "asc" });
    } else {
      setSort({ key, order: "asc" });
    }
  };
  return (
    <div className="flex- w-full px-4 md:px-6 py-8 bg-orange-100">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Current Bookings</h1>
        <Button className="shrink-0 bg-lime-200 hover:bg-lime-400/90 text-gray-900">
          Create New Booking
        </Button>
      </div>
      <div className=" max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden bg-yellow-200">
        <div className="px-6 py-4 border-b">
          <Input
            placeholder="Search bookings..."
            value={search}
            onChange={handleSearch}
            className="w-full"
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("name")}
              >
                Customer Name
                {sort.key === "name" && (
                  <span className="ml-1">
                    {sort.order === "asc" ? "\u2191" : "\u2193"}
                  </span>
                )}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("type")}
              >
                Type
                {sort.key === "type" && (
                  <span className="ml-1">
                    {sort.order === "asc" ? "\u2191" : "\u2193"}
                  </span>
                )}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("date")}
              >
                Booking Date
                {sort.key === "date" && (
                  <span className="ml-1">
                    {sort.order === "asc" ? "\u2191" : "\u2193"}
                  </span>
                )}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("status")}
              >
                Status
                {sort.key === "status" && (
                  <span className="ml-1">
                    {sort.order === "asc" ? "\u2191" : "\u2193"}
                  </span>
                )}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>
                  <a href="cancelation">{booking.name}</a>
                </TableCell>
                <TableCell>
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      booking.type === "Restaurant"
                        ? "bg-red-100 text-red-600"
                        : booking.type === "Dog Park"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {booking.type}
                  </div>
                </TableCell>
                <TableCell>{booking.date}</TableCell>
                <TableCell>
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      booking.status === "Confirmed"
                        ? "bg-green-100 text-green-600"
                        : booking.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                    }`}
                  >
                    {booking.status}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
