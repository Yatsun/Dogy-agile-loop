/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yzCLtgp3nYX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="flex items-center h-16 px-4 border-b shrink-0 bg-orange-100">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
          <PawPrintIcon className="w-6 h-6" />
          <span>Unleash the Fun</span>
        </Link>
        <div className="ml-auto flex gap-2">
          <Link
            href="login"
            className="inline-flex h-9 items-center justify-center rounded-md bg-lime-200 px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-lime-400/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            Login
          </Link>
          
          <Link
            href="registration"
            className="inline-flex h-9 items-center justify-center rounded-md bg-lime-200 px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-lime-400/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            Register
          </Link>
          <Link
            href="bookings"
            className="inline-flex h-9 items-center justify-center rounded-md bg-lime-200 px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-lime-400/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            Bookings
          </Link>
        </div>
      </header>
      <main className="flex-1 bg-orange-100">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Unleash the Fun: Dog Meet-Up
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explore a world of canine companions and plan your perfect getaway.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link
                  href="Parks"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-lime-200 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-lime-400/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Find Dog Parks
                </Link>
                <Link
                  href="Vetininary"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-lime-200 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-lime-400/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Find Veterinarians
                </Link>
                <Link
                  href="Restaurants"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-lime-200 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-lime-400/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Find Dog-Friendly Restaurants
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function PawPrintIcon(props) {
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
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="20" cy="16" r="2" />
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </svg>
  )
}