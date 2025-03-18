
import Link from "next/link"
import { ShoppingBag } from "lucide-react"


export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <ShoppingBag className="h-6 w-6" />
            <span>StyleStore</span>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} StyleStore. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            Terms
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            Privacy
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}