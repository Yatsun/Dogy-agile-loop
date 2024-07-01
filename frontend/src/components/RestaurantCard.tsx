import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import Link from "next/link";

export const RestaurantCard = ({ restaurant }: { restaurant: any }) => {
  return (
    <div className="relative overflow-hidden rounded-lg group">
      <Link
        href={restaurant.url}
        className="absolute inset-0 z-10"
        prefetch={false}
      >
        <span className="sr-only">View</span>
      </Link>
      <img
        src={restaurant.image}
        alt={restaurant.name}
        width={400}
        height={300}
        className="object-cover w-full h-60"
      />
      <div className="p-4 bg-white bg-yellow-100">
        <h3 className="text-lg font-semibold md:text-xl">{restaurant.name}</h3>
        <p className="text-sm text-gray-500">{restaurant.rating}</p>
        <div className="mt-4">
          <Button
            className="bg-lime-200 hover:bg-lime-400/90 text-gray-900"
            variant="outline"
            size="sm"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};
