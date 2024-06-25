/**
 * v0 by Vercel.
 * @see https://v0.dev/t/c9Sbsf7Wj0v
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/ui/input"
import { Button } from "@/ui/button"
import Link from "next/link"

export function Restuarants() {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 bg-orange-100">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">Explore Restaurants</h1>
        <Input type="search" placeholder="Search restaurants..." className="flex-1" />
        <Button className="bg-lime-200 hover:bg-lime-400/90 text-gray-900" variant="outline" size="sm">
          Search
        </Button>
      </div>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="relative overflow-hidden rounded-lg group">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Restaurant 1"
            width={400}
            height={300}
            className="object-cover w-full h-60"
          />
          <div className="p-4 bg-white dark:bg-gray-950 bg-yellow-100">
            <h3 className="text-lg font-semibold md:text-xl">Authentic Italian Cuisine</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Enjoy a taste of Italy in the heart of the city.</p>
            <div className="mt-4">
              <Button className="bg-lime-200 hover:bg-lime-400/90 text-gray-900" variant="outline" size="sm">
                View Details
              </Button>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg group">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Restaurant 2"
            width={400}
            height={300}
            className="object-cover w-full h-60"
          />
          <div className="p-4 bg-white dark:bg-gray-950 bg-yellow-100">
            <h3 className="text-lg font-semibold md:text-xl">Fusion Flavors</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Explore a world of culinary fusion.</p>
            <div className="mt-4">
              <Button className="bg-lime-200 hover:bg-lime-400/90 text-gray-900" variant="outline" size="sm">
                View Details
              </Button>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg group">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Restaurant 3"
            width={400}
            height={300}
            className="object-cover w-full h-60"
          />
          <div className="p-4 bg-white dark:bg-gray-950 bg-yellow-100">
            <h3 className="text-lg font-semibold md:text-xl">Gourmet Burgers</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Indulge in our handcrafted, mouthwatering burgers.
            </p>
            <div className="mt-4">
              <Button className="bg-lime-200 hover:bg-lime-400/90 text-gray-900" variant="outline" size="sm">
                View Details
              </Button>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg group">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Restaurant 4"
            width={400}
            height={300}
            className="object-cover w-full h-60"
          />
          <div className="p-4 bg-white dark:bg-gray-950 bg-yellow-100">
            <h3 className="text-lg font-semibold md:text-xl">Sushi Delight</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Experience the art of sushi in a modern setting.</p>
            <div className="mt-4">
              <Button className="bg-lime-200 hover:bg-lime-400/90 text-gray-900" variant="outline" size="sm">
                View Details
              </Button>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg group">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Restaurant 4"
            width={400}
            height={300}
            className="object-cover w-full h-60"
          />
          <div className="p-4 bg-white dark:bg-gray-950 bg-yellow-100">
            <h3 className="text-lg font-semibold md:text-xl">Sushi Delight</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Experience the art of sushi in a modern setting.</p>
            <div className="mt-4">
              <Button className="bg-lime-200 hover:bg-lime-400/90 text-gray-900"variant="outline" size="sm">
                View Details
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}