'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { toast } from "sonner"
import { Plus } from "lucide-react";
import { Loader2 } from "lucide-react"

import { Suspense, useState } from "react";
import {getSubCategoriesWithCategories} from '@/server/category'
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

interface Subcategories {
  _id: string;
  name: string;
  subcategories: string[];
}


export default function Category() {

  const [loading, setLoading] = useState<boolean>(false)
  const { isPending, error, data } = useQuery<Subcategories[]>({
    queryKey: ['subcategories'],
    queryFn: getSubCategoriesWithCategories
  })

  if (isPending) return (toast.loading("Loading..."))

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      <Card className="lg:col-span-4">
        <CardHeader>
          <CardTitle>List of Category With Sub Category</CardTitle>
          <div className="flex justify-end">
            <Button variant="outline" className="mr-2" asChild>
              <Link href="/admin/category/all-category" onClick={() => setLoading(true)}>
                {loading ? <Loader2 className="animate-spin" /> : null}
                All Category
              </Link>
            </Button>
            <Button variant="default" className="cursor-pointer" asChild>
              <Link href="/admin/category/create" onClick={() => setLoading(true)}>
                {loading ? <Loader2 className="animate-spin" /> : <Plus className="h-12 w-12" />}
                Add New Category
              </Link>
            </Button>
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
            <Suspense fallback={<h1><Loader2 className="animate-spin" /> Loading...</h1>}>
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