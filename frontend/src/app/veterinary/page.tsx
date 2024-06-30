import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/ui/table";

export default function Component() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-orange-100">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Nearby Veterinary Hospitals
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find the best veterinary care for your furry friends.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-1">
          <div className="border shadow-sm rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Phone</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    Paws and Claws Animal Hospital
                  </TableCell>
                  <TableCell>123 Main St, Anytown USA</TableCell>
                  <TableCell>
                    <a className="text-blue-500 hover:underline" href="#">
                      1-800-555-1234
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Furry Friends Veterinary Clinic
                  </TableCell>
                  <TableCell>456 Oak Rd, Somewhere City</TableCell>
                  <TableCell>
                    <a className="text-blue-500 hover:underline" href="#">
                      1-800-555-1234
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Whiskers and Tails Animal Hospital
                  </TableCell>
                  <TableCell>789 Elm St, Othertown</TableCell>
                  <TableCell>
                    <a className="text-blue-500 hover:underline" href="#">
                      1-800-555-1234
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Purrfect Pets Veterinary Care
                  </TableCell>
                  <TableCell>321 Oak Ave, Somewhere Else</TableCell>
                  <TableCell>
                    <a className="text-blue-500 hover:underline" href="#">
                      1-800-555-1234
                    </a>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
