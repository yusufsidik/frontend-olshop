'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import { Suspense } from "react";
import {getSubCategoriesWithCategories} from '@/server/category'
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

interface Subcategories {
  _id: string;
  name: string;
  subcategories: string[];
}


export default function Category() {

  const { isPending, error, data } = useQuery<Subcategories[]>({
    queryKey: ['subcategories'],
    queryFn: getSubCategoriesWithCategories
  })

  if (isPending) return (<h1>Loading..</h1>)

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      {/* subcategories */}
      <Card className="lg:col-span-4">
        <CardHeader>
          <div className="flex justify-between">
            <div>
              <CardTitle>List of Category With Sub Category</CardTitle>
              <CardDescription>You have Description</CardDescription>
            </div>
            <div>
              <Button variant="outline" className="mr-2">
                <Link href="/admin/category/all-category" >All Category</Link>
              </Button>
              <Button variant="default" className="cursor-pointer" asChild>
                <Link href="/admin/category/create">
                  <Plus className="h-12 w-12" />
                  Add New Category
                </Link>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Categories</TableHead>
                <TableHead>Sub Category</TableHead>
              </TableRow>
            </TableHeader>
            <Suspense fallback={<div>Loading...</div>}>
              <TableBody>
                {data?.map((category, index) => (
                  <TableRow key={category._id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell className="font-medium">{category.name}</TableCell>
                    <TableCell>{category.subcategories.map((subcat, index) => <Badge variant="default" key={index} className="block mb-1">{subcat}</Badge>)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Suspense>
          </Table>
          <CardFooter>
            
          </CardFooter>
        </CardContent>
      </Card>
    </>
  )
}