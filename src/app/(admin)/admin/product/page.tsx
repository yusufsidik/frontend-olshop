import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Plus, SlidersHorizontal } from 'lucide-react';

import Link from "next/link"

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  isAvailable: boolean;
  description: string;
  directWA: string;
}

export default function Product() {

  const products : Product[] = [
    {
      id: 1,
      name: "Lenovo Ideapad Slim 5i Intel Ultra 5 125H 512GB SSD 16GB OLED Win11 ",
      price: 13000000,
      brand: "Lenovo",
      rating: 4,
      category: "Laptop",
      isAvailable: true,
      description: "Lenovo Ideapad Slim 5i Intel Ultra 5 125H 512GB SSD 16GB OLED Win11 Id…",
      directWA: "08111111111"
    },
    {
      id: 2,
      name: "Asus Vivobook 14 Intel Core i5 (Gen 11 ) 1135G7 8cpus up to 4,2GHz 8/1TB SSD - Core i5 Gen 12, 8/256",
      price: 7200000,
      brand: "Asus",
      rating: 4,
      category: "Laptop",
      isAvailable: true,
      description: "Unit ini sudah menggunakan Processor Core i5 terbaru dengan 8cpus tentu nya, sangat cocok untuk penggunaan berat seperti Programming/Coding. Bisa pula penggunaan design2 umum krena sudah menggunakan Intel Iris XE, Contoh seperti Filmora, Canva, Movie Maker,dll",
      directWA: "08111111111"
    }
    
  ]

  return (
    <Card className="lg:col-span-4">
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <CardTitle>List of Products</CardTitle>
            <CardDescription>You have Description</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Sort
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Sort by Category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Electronic</DropdownMenuItem>
                <DropdownMenuItem>Furniture</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="default" className="cursor-pointer" asChild>
              <Link href="/admin/product/create">
                <Plus className="h-12 w-12" />
                Add Products
              </Link>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Available</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.brand}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.isAvailable}</TableCell>
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