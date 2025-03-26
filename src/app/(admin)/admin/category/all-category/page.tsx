'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { Suspense } from "react";
import { cn } from "@/lib/utils";

import { getCategories } from "@/server/category";
import { useQuery } from "@tanstack/react-query";

<<<<<<< HEAD
import { useRouter } from "next/navigation"
import EditCategory from "./edit"
=======
import EditCategory from "../all-category/edit"

>>>>>>> 025aa67392cf0445572faeb98a3526f3ac231a70

interface AllCategories {
  _id: string;
  name: string;
  parentCategory?: {
    _id: string;
    name: string;
    parentCategory: string;
  }
  createdAt: string;
  updatedAt: string;
}


export default function AllCategory() {

  const router = useRouter()

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
          <CardDescription>You have Description</CardDescription>
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
                    <TableCell>
<<<<<<< HEAD
                    
                      <EditCategory dataCategory={category} />
                      
                      <Button variant="destructive">Delete</Button>
=======
                      <EditCategory category={category} />
>>>>>>> 025aa67392cf0445572faeb98a3526f3ac231a70
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