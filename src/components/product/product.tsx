import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
}



export default function Product({id, name, description, price, category, rating}: Product) {
  return (
    <Link href={`/products/${id}`} key={id} className="group">
      <div className="overflow-hidden rounded-lg border bg-background">
        <Image
          src={`/placeholder.svg?height=300&width=300&text=Product+${id}`}
          alt={name}
          width={300}
          height={300}
          className="aspect-square object-cover transition-transform group-hover:scale-105"
        />
        <div className="p-4">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="flex text-yellow-500 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={i < rating ? "currentColor" : "none"}
                stroke={i < rating ? "none" : "currentColor"}
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="font-semibold">${price.toFixed(2)}</span>
            <Button variant="outline" size="sm">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}