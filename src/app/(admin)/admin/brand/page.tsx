import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

import { Plus } from 'lucide-react';

import { Suspense } from "react";

import axios from 'axios'
import { Tanggal } from "@/lib/tanggal";

interface Brand {
  _id: string
  name: string
  createdAt: string
  updatedAt: string
}
export default async function Brand() {

  const data = await axios.get('http://localhost:8000/brand')
  const brands : Brand[] = await data.data.data

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
              <TableHead>Update At</TableHead>
              <TableHead>Created At</TableHead>
            </TableRow>
          </TableHeader>
          <Suspense fallback={<h1>Loading...</h1>}>
            <TableBody>
              {brands.map((brand, index) => (
                <TableRow key={brand._id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{brand.name}</TableCell>
                  <TableCell>{Tanggal(brand.createdAt) }</TableCell>
                  <TableCell>{Tanggal(brand.updatedAt) }</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Suspense>
        </Table> 
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Previous</Button>
        <Button variant="outline">Next</Button>
      </CardFooter>
    </Card>
  )
}