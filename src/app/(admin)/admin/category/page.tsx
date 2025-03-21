'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

import { Plus } from 'lucide-react';
import { Suspense } from "react";
import axios from 'axios'
import { cn } from "@/lib/utils";

interface Subcategories {
  _id: string;
  name: string;
  subcategories: string[];
}

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

export default async function Category() {

  const endpointSubcategoryWithCategory = await axios.get('http://localhost:8000/category/subcategory-with-category')
  const subcategories : Subcategories[] = await endpointSubcategoryWithCategory.data.data

  const endpointAllCategory = await axios.get('http://localhost:8000/category')
  const categories : AllCategories[] = await endpointAllCategory.data.data

  return (
    <>
      {/* subcategories */}
      <Card className="lg:col-span-4">
        <CardHeader>
          <CardTitle>List of Category With Sub Category</CardTitle>
          <CardDescription>You have Description</CardDescription>
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
                {subcategories.map((category, index) => (
                  <TableRow key={category._id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{category.name}</TableCell>
                    <TableCell>{category.subcategories.map((subcat, index) => <p key={index}>{subcat}</p>)}</TableCell>
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

      {/* all categories */}
      <Card className="lg:col-span-4 mt-8">
        <CardHeader>
          <div className="flex justify-between">
            <div>
              <CardTitle>List of Category</CardTitle>
              <CardDescription>You have Description</CardDescription>
              <i className="font-bold">*Text green means parent category</i>
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
              <TableRow className="font-bold">
                <TableHead>No</TableHead>
                <TableHead>Categories</TableHead>
                <TableHead>Parent Category</TableHead>
              </TableRow>
            </TableHeader>
            <Suspense fallback={<div>Loading...</div>}>
              <TableBody>
                {categories.map((category, index) => (
                  <TableRow key={category._id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell className={cn("font-medium", {
                      "text-green-700": category.parentCategory === null
                    })}>{category.name}</TableCell>
                    <TableCell>{category.parentCategory?.name}</TableCell>
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