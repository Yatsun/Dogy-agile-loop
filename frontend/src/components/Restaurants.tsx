import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import { RestaurantCard } from "@/../components/RestaurantCard";

export function Restaurants({ data }: { data: any }) {
  if (!data) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-lg text-gray-500">No restaurants found.</p>
      </div>
    );
  }
  const restaurants = data.businesses.map((business: any) => {
    return {
      name: business.name,
      image: business.image_url,
      address: business.location.display_address.join(", "),
      phone: business.display_phone,
      url: business.url,
      rating: business.rating,
      price: business.price,
    };
  });
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 bg-orange-100">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">Explore Restaurants</h1>
        <Input
          type="search"
          placeholder="Search restaurants..."
          className="flex-1"
        />
        <Button
          className="bg-lime-200 hover:bg-lime-400/90 text-gray-900"
          variant="outline"
          size="sm"
        >
          Search
        </Button>
      </div>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {restaurants.map((restaurant: any) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </section>
    </div>
  );
}
