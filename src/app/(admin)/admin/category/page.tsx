import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

import { Plus } from 'lucide-react';

export default function Category() {

  const categories = [
    {
      id: 1,
      name: "Electronic",
      parentCategory: null
    },
    {
      id: 2,
      name: "Furniture",
      parentCategory: null
    },
    {
      id: 3,
      name: "Clothing",
      parentCategory: null
    },
    {
      id: 4,
      name: "Books",
      parentCategory: null
    },
    {
      id: 5,
      name: "Laptop",
      parentCategory: "Electronic"
    },
    {
      id: 6,
      name: "Mobile",
      parentCategory: "Electronic"
    },
    {
      id: 7,
      name: "Table",
      parentCategory: "Furniture"
    }
  ]

  return (
    <Card className="lg:col-span-4">
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <CardTitle>List of Category</CardTitle>
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
              <TableHead>Category</TableHead>
              <TableHead>Parent Category</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category, index) => (
              <TableRow key={category.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.parentCategory}</TableCell>
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