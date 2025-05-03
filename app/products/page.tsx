import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "EVA Slippers",
      description: "Lightweight and durable footwear for daily use.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      name: "Tiles",
      description: "Ceramic and porcelain tiles in various sizes and finishes.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      name: "Scaffolding",
      description: "Steel scaffolding systems for construction projects.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      name: "Steel Props",
      description: "Telescopic steel props for structural support.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ready-to-export products from India and other Asian countries
        </p>
      </div>

      <div className="bg-red-50 rounded-xl p-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Interested in ready-to-export products from Asia?</h2>
          <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
            In addition to our export services, we offer a range of products that we regularly export from India and
            other Asian countries. If you're looking to expand your product line or want to receive a catalog, pricing,
            or samples, we're here to help.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <Link href="/contact">
                  Request Information <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Need More Information?</h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Reach out to explore technical specs, FOB pricing, or tailored quotations for any of our products.
        </p>
        <Button asChild className="bg-red-600 hover:bg-red-700">
          <Link href="/contact">Contact Our Product Team</Link>
        </Button>
      </div>
    </div>
  )
}
