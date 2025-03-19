import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

import { Plus } from 'lucide-react';


export default async function AdminBrand() {

  const brands = [
    {
      id: 1,
      name: "Asus"
    },
    {
      id: 2,
      name: "Lenovo"
    },
    {
      id: 3,
      name: "Acer"
    },
    {
      id: 4,
      name: "Dell"
    },
    {
      id: 5,
      name: "Axio"
    }
  ]

  return (
    <Card className="lg:col-span-4">
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <CardTitle>List of Brand</CardTitle>
            <CardDescription>You have Description</CardDescription>
          </div>
          <Button variant="default" className="cursor-pointer">
            <Plus className="h-12 w-12" />
            Add Brand
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Brand Name</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {brands.map((brand, index) => (
              <TableRow key={brand.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{brand.name}</TableCell>
                <TableCell className="flex gap-x-2">
                  <Button variant="secondary">Edit</Button>
                  <Button variant="destructive">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Previous</Button>
        <Button variant="outline">Next</Button>
      </CardFooter>
    </Card>
  )
}