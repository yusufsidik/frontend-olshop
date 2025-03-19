import Product from "@/components/product/product"
import { Filter, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function ProductsPage() {
  // Mock product data
  const products = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    description: "High-quality product with premium materials",
    price: 49.99 + i * 10,
    category: i % 4 === 0 ? "Men" : i % 4 === 1 ? "Women" : i % 4 === 2 ? "Accessories" : "Footwear",
    rating: 4 + (i % 2),
  }))

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">All Products</h1>
              <p className="text-muted-foreground mt-1">Browse our collection of premium products</p>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <div className="relative w-full md:w-auto">
                <Input placeholder="Search products..." className="pl-8 w-full md:w-[200px] lg:w-[300px]" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="md:hidden">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>Narrow down your product search</SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <h3 className="font-medium mb-2">Categories</h3>
                    <div className="space-y-2">
                      {["All", "Men", "Women", "Accessories", "Footwear"].map((category) => (
                        <div key={category} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`category-${category}`}
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                          <label htmlFor={`category-${category}`} className="ml-2 text-sm">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                    <Separator className="my-4" />
                    <h3 className="font-medium mb-2">Price Range</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <Input type="number" placeholder="Min" />
                      <Input type="number" placeholder="Max" />
                    </div>
                    <Separator className="my-4" />
                    <h3 className="font-medium mb-2">Rating</h3>
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`rating-${rating}`}
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                          <label htmlFor={`rating-${rating}`} className="ml-2 text-sm flex items-center">
                            {Array.from({ length: rating }).map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 text-yellow-500"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ))}
                            <span className="ml-1">& Up</span>
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button className="w-full">Apply Filters</Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Sort
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Newest</DropdownMenuItem>
                  <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                  <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                  <DropdownMenuItem>Rating: High to Low</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="hidden md:block space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {["All", "Men", "Women", "Accessories", "Footwear"].map((category) => (
                      <div key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`desktop-category-${category}`}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <label htmlFor={`desktop-category-${category}`} className="ml-2 text-sm">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Price Range</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <Input type="number" placeholder="Min" />
                    <Input type="number" placeholder="Max" />
                  </div>
                  <Button className="w-full mt-4">Apply</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Rating</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`desktop-rating-${rating}`}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <label htmlFor={`desktop-rating-${rating}`} className="ml-2 text-sm flex items-center">
                          {Array.from({ length: rating }).map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 text-yellow-500"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ))}
                          <span className="ml-1">& Up</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="md:col-span-2 lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* products */}
                {products.map((product) => (
                  <Product {...product} key={product.id} />
                ))}
              </div>

              {/* pagination */}
              <div className="flex justify-center mt-8">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" disabled>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

