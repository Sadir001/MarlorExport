import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Supplier Sourcing and Factory Verification",
      description:
        "We identify reliable factories in India and across Asia that match your needs. We verify product quality, production capacity, and compliance.",
    },
    {
      id: 2,
      title: "Purchase Management and Negotiation",
      description:
        "We handle pricing, quantities, and contract terms directly with suppliers to secure competitive deals.",
    },
    {
      id: 3,
      title: "Product Consolidation",
      description:
        "We collect goods from multiple suppliers and consolidate them into a single warehouse for combined container loading. Ideal for clients sourcing diverse products.",
    },
    {
      id: 4,
      title: "Quality Control",
      description:
        "We conduct inspections before shipment, checking product condition, packaging, and labeling. We provide photo reports, videos, or live video calls upon request.",
    },
    {
      id: 5,
      title: "Logistics Coordination and Container Loading",
      description:
        "We organize domestic transport within India, reserve containers with shipping lines, and supervise container stuffing and loading.",
    },
    {
      id: 6,
      title: "Export Documentation",
      description:
        "We prepare all required export documents: Commercial Invoice, Packing List, Bill of Lading (BL), Certificate of Origin (CO), Shipping Bill, LUT, AD Code, FCGPR, and others.",
    },
    {
      id: 7,
      title: "Full Export Service",
      description:
        "We offer a complete export solution from factory to destination port (door-to-port), excluding import taxes at destination.",
    },
    {
      id: 8,
      title: "Private Label / OEM Branding",
      description:
        "We assist you in customizing your products with your own brand, including labeling, packaging, and manuals in Spanish.",
    },
    {
      id: 9,
      title: "Buyer Assistance in India",
      description:
        "We arrange factory visits, schedules, local transportation, and provide translator support during your business trip.",
    },
  ]

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Export Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive export solutions to connect Latin American businesses with Asian manufacturers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card
            key={service.id}
            className="border-2 border-gray-100 hover:border-red-200 transition-colors duration-300"
          >
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-red-600" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-gray-600">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-20 bg-gray-50 rounded-xl p-8 shadow-sm">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Export Process</h2>
          <p className="text-gray-600 mt-2">How we ensure a smooth export experience for your business</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="font-semibold text-lg mb-2">Initial Consultation</h3>
            <p className="text-gray-600">We understand your requirements and product specifications</p>
          </div>

          <div className="text-center">
            <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="font-semibold text-lg mb-2">Supplier Selection</h3>
            <p className="text-gray-600">We identify and verify the best suppliers for your needs</p>
          </div>

          <div className="text-center">
            <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="font-semibold text-lg mb-2">Quality Control</h3>
            <p className="text-gray-600">We ensure products meet your quality standards</p>
          </div>

          <div className="text-center">
            <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              4
            </div>
            <h3 className="font-semibold text-lg mb-2">Shipping & Documentation</h3>
            <p className="text-gray-600">We handle logistics and prepare all export documents</p>
          </div>
        </div>
      </div>
    </div>
  )
}
