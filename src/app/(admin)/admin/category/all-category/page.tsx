'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { Suspense } from "react";
import { cn } from "@/lib/utils";

import { getCategories } from "@/server/category";
import { useQuery } from "@tanstack/react-query";

import EditCategory from "@/app/(admin)/admin/category/all-category/edit"
import DeleteCategory from "@/app/(admin)/admin/category/all-category/delete"

interface AllCategories {
  _id: string;
  name: string;
  parentCategory?: {
    _id: string;
    name: string;
    parentCategory: string;
  } | null;
  createdAt: string;
  updatedAt: string;
}

export default function AllCategory() {

  const { isPending, error, data } = useQuery<AllCategories[]>({
    queryKey: ['categories'],
    queryFn: getCategories
  })

  if (isPending) return (<h1>Loading..</h1>)

  if (error) return 'An error has occurred: ' + error.message
  
  return (
    <>
      {/* all categories */}
      <Card className="lg:col-span-4 mt-8">
        <CardHeader>
          <CardTitle>List of Category</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="font-bold">
                <TableHead>No</TableHead>
                <TableHead>Categories</TableHead>
                <TableHead>Parent Category</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <Suspense fallback={<div>Loading...</div>}>
              <TableBody>
                {data.map((category, index) => (
                  <TableRow key={category._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell className={cn("font-medium", {
                      "text-green-700": category.parentCategory === null
                    })}>{category.name}</TableCell>
                    <TableCell>{category.parentCategory === null ? "-" : <Badge>{category.parentCategory?.name}</Badge>} </TableCell>
                    <TableCell className="flex gap-3">
                      <EditCategory category={category} />
                      <DeleteCategory category={category} />
                    </TableCell>
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
    </>
  )
}