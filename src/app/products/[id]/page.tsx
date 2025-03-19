import Link from "next/link"
import Image from "next/image"
import { Heart, Minus, Plus, Share2, Star, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import * as React from "react"

async function ProductPage({ params }: { params: Promise<{ id: string }> }) {

  const {id} = await params
  const productId = Number.parseInt(id)

  // Mock product data
  const product = {
    id: productId,
    name: `Premium Product ${productId}`,
    description:
      "High-quality product with premium materials and exceptional craftsmanship. Designed for comfort and style.",
    price: 49.99 + productId * 10,
    rating: 4.5,
    reviews: 127,
    colors: ["Black", "White", "Navy", "Gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      `/placeholder.svg?height=600&width=600&text=Product+${productId}+Image+1`,
      `/placeholder.svg?height=600&width=600&text=Product+${productId}+Image+2`,
      `/placeholder.svg?height=600&width=600&text=Product+${productId}+Image+3`,
      `/placeholder.svg?height=600&width=600&text=Product+${productId}+Image+4`,
    ],
    details: [
      "Premium quality materials",
      "Comfortable fit",
      "Durable construction",
      "Easy to care for",
      "Versatile design",
    ],
    specifications: {
      Material: "100% Premium Cotton",
      Weight: "250g",
      Dimensions: "25cm x 30cm",
      Care: "Machine wash cold, tumble dry low",
      Origin: "Made in Portugal",
    },
  }

  // Mock related products
  const relatedProducts = Array.from({ length: 4 }).map((_, i) => ({
    id: i + 1 === productId ? i + 5 : i + 1,
    name: `Product ${i + 1 === productId ? i + 5 : i + 1}`,
    price: 49.99 + (i + 1 === productId ? i + 5 : i + 1) * 10,
  }))

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="aspect-square object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, i) => (
                  <div key={i} className={`overflow-hidden rounded-lg border ${i === 0 ? "ring-2 ring-primary" : ""}`}>
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - Image ${i + 1}`}
                      width={150}
                      height={150}
                      className="aspect-square object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5"
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <p className="text-2xl font-bold mt-2">${product.price.toFixed(2)}</p>
              </div>

              <p className="text-muted-foreground">{product.description}</p>

              <div>
                <h3 className="font-medium mb-2">Color</h3>
                <div className="flex gap-2">
                  {product.colors.map((color, i) => (
                    <Button
                      key={color}
                      variant="outline"
                      className={`rounded-full h-8 px-4 ${i === 0 ? "bg-primary text-primary-foreground" : ""}`}
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size, i) => (
                    <Button
                      key={size}
                      variant="outline"
                      className={`w-10 h-10 ${i === 2 ? "bg-primary text-primary-foreground" : ""}`}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
                <Link href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                  Size Guide
                </Link>
              </div>

              <div>
                <h3 className="font-medium mb-2">Quantity</h3>
                <div className="flex items-center">
                  <Button variant="outline" size="icon" className="h-10 w-10 rounded-r-none">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="flex h-10 w-12 items-center justify-center border-y">1</div>
                  <Button variant="outline" size="icon" className="h-10 w-10 rounded-l-none">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button size="lg" className="flex-1">
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  Buy Now
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <div className="rounded-lg border p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-muted-foreground" />
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-muted-foreground"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                    <line x1="4" x2="4" y1="22" y2="15" />
                  </svg>
                  <span>30-day return policy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="details">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
                <TabsTrigger
                  value="details"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none py-3"
                >
                  Details
                </TabsTrigger>
                <TabsTrigger
                  value="specifications"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none py-3"
                >
                  Specifications
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none py-3"
                >
                  Reviews ({product.reviews})
                </TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="pt-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Product Details</h3>
                  <p>
                    Experience premium quality with our {product.name}. Crafted with attention to detail and using only
                    the finest materials, this product offers both style and functionality.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    {product.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="specifications" className="pt-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Product Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex">
                        <span className="font-medium w-32">{key}:</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="pt-4">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Customer Reviews</h3>
                    <Button>Write a Review</Button>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold">{product.rating}</div>
                    <div>
                      <div className="flex text-yellow-500">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5"
                            fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">Based on {product.reviews} reviews</p>
                    </div>
                  </div>
                  <Separator />
                  {/* Sample reviews */}
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">John Doe</h4>
                        <span className="text-sm text-muted-foreground">
                          {new Date(Date.now() - i * 86400000).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex text-yellow-500">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} className="h-4 w-4" fill={j < 5 - i ? "currentColor" : "none"} />
                        ))}
                      </div>
                      <p>
                        {i === 0
                          ? "Absolutely love this product! The quality is exceptional and it looks even better in person. Highly recommend!"
                          : i === 1
                            ? "Great product for the price. Comfortable and stylish. Would buy again."
                            : "Good product overall. Shipping was fast and the item was as described."}
                      </p>
                      <Separator />
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    Load More Reviews
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link href={`/products/${relatedProduct.id}`} key={relatedProduct.id} className="group">
                  <div className="overflow-hidden rounded-lg border bg-background">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=Product+${relatedProduct.id}`}
                      alt={relatedProduct.name}
                      width={300}
                      height={300}
                      className="aspect-square object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold">{relatedProduct.name}</h3>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="font-semibold">${relatedProduct.price.toFixed(2)}</span>
                        <Button variant="outline" size="sm">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductPage

