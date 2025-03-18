import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Discover Your Style, Elevate Your Wardrobe
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Shop the latest trends in fashion with our curated collection of premium clothing and accessories.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/products">
                    <Button size="lg" className="w-full min-[400px]:w-auto">
                      Shop Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/collections">
                    <Button variant="outline" size="lg" className="w-full min-[400px]:w-auto">
                      View Collections
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                alt="Hero Image"
                width={550}
                height={550}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square"
                priority
              />
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Products</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Discover our most popular items loved by customers worldwide.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {[1, 2, 3, 4].map((i) => (
                <Link href={`/products/${i}`} key={i} className="group">
                  <div className="overflow-hidden rounded-lg border bg-background relative">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=Product+${i}`}
                      alt={`Product ${i}`}
                      width={355}
                      height={355}
                      className="aspect-square object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold">Premium Product {i}</h3>
                      <p className="text-sm text-muted-foreground">High-quality materials</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="font-semibold">${(49.99 + i * 10).toFixed(2)}</span>
                        <Button variant="outline" size="sm">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <Link href="/products">
                <Button variant="outline" size="lg">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Shop by Category</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Browse our collections by category to find exactly what you're looking for.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {["Men", "Women", "Accessories", "Footwear"].map((category) => (
                <Link href={`/category/${category.toLowerCase()}`} key={category} className="group">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=${category}`}
                      alt={category}
                      width={300}
                      height={300}
                      className="aspect-square object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <h3 className="text-white text-2xl font-bold">{category}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Customers Say</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Don't just take our word for it. Here's what our customers have to say.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  name: "Alex Johnson",
                  text: "The quality of the products exceeded my expectations. Will definitely shop here again!",
                },
                {
                  name: "Sarah Williams",
                  text: "Fast shipping and excellent customer service. The clothes fit perfectly!",
                },
                {
                  name: "Michael Brown",
                  text: "I've been a loyal customer for years. The quality and style are consistently amazing.",
                },
              ].map((testimonial, i) => (
                <div key={i} className="rounded-lg border bg-background p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src={`/placeholder.svg?height=40&width=40&text=${testimonial.name.charAt(0)}`}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">Verified Customer</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{testimonial.text}</p>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Stay Updated</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Subscribe to our newsletter to receive updates on new arrivals, special offers, and more.
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <form className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main> 
    </div>
  )
}

