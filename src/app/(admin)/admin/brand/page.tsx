import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

import { Plus } from 'lucide-react';

import { Suspense } from "react";

export default function Brand() {

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
        {/* <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Categories</TableHead>
            </TableRow>
          </TableHeader>
          <Suspense fallback={<div>Loading...</div>}>
            <TableBody>
              {subcategories.map((category, index) => (
                <TableRow key={category._id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>{category.subcategories.map((subcat, index) => <p key={index}>{subcat}</p>)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Suspense>
        </Table> */}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Previous</Button>
        <Button variant="outline">Next</Button>
      </CardFooter>
    </Card>
  )
}