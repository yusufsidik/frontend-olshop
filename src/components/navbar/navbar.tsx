import Link from "next/link"
// import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingBag} from "lucide-react"

export default function Navbar() {
  return (
    <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
          <Link href="/products" className="flex items-center gap-2 text-lg font-semibold">
            <ShoppingBag className="h-6 w-6" />
            <span>StyleStore</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium hover:underline underline-offset-4">
              Products
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  3
                </span>
              </Button>
            </Link>
            <Link href="/login" className="hidden md:block">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/signup" className="hidden md:block">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>
  )
}