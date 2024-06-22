/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FvDKYAvDroj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/ui/button"

export default function Component() {
  return (
    <div className="max-w p-6 sm:p-8 md:p-10 bg-orange-100">
      <div className="bg-card max-w-4xl mx-auto p-6 sm:p-8 md:p-10 rounded-lg shadow-lg bg-yellow-100">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Your Booking</h1>
          <Button variant="destructive" size="sm">
            Cancel Booking
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Reservation Details</h2>
              <p className="text-muted-foreground">Check-in: 2023-06-25 | Check-out: 2023-06-28</p>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Guests</h2>
              <p className="text-muted-foreground">2 adults</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Total Cost</h2>
              <p className="text-2xl font-bold">$1,200</p>
            </div>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Cancellation Policy</h2>
            <p className="text-muted-foreground">
              You can cancel your booking up to 48 hours before check-in for a full refund. Cancellations within 48
              hours of check-in will not be eligible for a refund.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}