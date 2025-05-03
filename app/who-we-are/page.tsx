import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function WhoWeArePage() {
  const values = [
    {
      title: "Trust",
      description: "We build long-term relationships based on transparency and reliability.",
    },
    {
      title: "Quality",
      description: "We ensure every product meets international standards and client specifications.",
    },
    {
      title: "Efficiency",
      description: "We optimize processes to save time and reduce costs for our clients.",
    },
    {
      title: "Cultural Bridge",
      description: "We navigate cultural and business differences between Asian and Latin American markets.",
    },
  ]

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Who We Are</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connecting businesses across continents with trusted export solutions
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Marlor Export Private Limited was founded with a clear vision: to bridge the gap between Asian
              manufacturers and Latin American markets. With extensive experience in international trade and deep
              knowledge of both regions, we identified an opportunity to create value by connecting these complementary
              economies.
            </p>
            <p>
              Our team combines expertise in sourcing, quality control, logistics, and international trade regulations
              to provide comprehensive export solutions. We understand the challenges businesses face when operating
              across different cultures, languages, and business practices, and we're here to make that process
              seamless.
            </p>
            <p>
              Based in India with a strong network across Asia, we leverage our local presence to identify reliable
              suppliers, ensure product quality, and manage the entire export process. Our commitment to excellence has
              made us a trusted partner for businesses looking to expand their reach across continents.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <Image src="/india-map-icon.png" alt="India Map" width={400} height={400} className="mx-auto" />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
          <p className="text-gray-600 mt-2">The principles that guide everything we do</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
        <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          "Connect businesses in Latin America with reliable Asian manufacturers through trusted, efficient, and
          customized export solutions."
        </p>
      </div>

      <div className="bg-red-600 text-white rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Building trust, delivering opportunities</h2>
        <p className="text-xl italic">Construyendo confianza, entregando oportunidades</p>
      </div>
    </div>
  )
}
