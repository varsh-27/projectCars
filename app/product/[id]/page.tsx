import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Heart, Share2, Flag, MapPin, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  // In a real app, you would fetch product data based on the ID
  const product = {
    id: params.id,
    title: "Toyota Camry",
    price: "25000",
    description:
      "Toyota Camry in excellent condition. Single owner, well maintained with regular service history. Features include power steering, power windows, air conditioning, airbags, and ABS.",
    location: "Kolhapur, Maharashtra",
    brand: "Toyota",
    model: "Camry",
    year: "2018",
    fuelType: "Petrol",
    transmission: "Automatic",
    kmDriven: "45,000",
    seats: "5",
    sellerName: "John Doe",
    sellerType: "Individual",
    postedDate: "2 days ago",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 py-4 mx-auto">
        <Link href="/" className="inline-flex items-center gap-1 mb-4 text-teal-700 hover:underline">
          <ArrowLeft className="w-4 h-4" />
          Back to listings
        </Link>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left Column - Images */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden bg-white border rounded-lg">
              <div className="relative">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.title}
                  width={600}
                  height={400}
                  className="object-cover w-full aspect-video"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute p-1.5 bg-white rounded-full top-4 right-4 hover:bg-gray-100"
                >
                  <Heart className="w-5 h-5 text-gray-500" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-2 p-2">
                {product.images.slice(1).map((image, index) => (
                  <Image
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${product.title} - Image ${index + 2}`}
                    width={200}
                    height={150}
                    className="object-cover w-full rounded-md aspect-video"
                  />
                ))}
              </div>
            </div>

            <div className="p-6 mt-6 bg-white border rounded-lg">
              <h2 className="text-xl font-bold">Details</h2>
              <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Brand</p>
                  <p className="font-medium">{product.brand}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Model</p>
                  <p className="font-medium">{product.model}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Year</p>
                  <p className="font-medium">{product.year}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Fuel Type</p>
                  <p className="font-medium">{product.fuelType}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Transmission</p>
                  <p className="font-medium">{product.transmission}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">KM Driven</p>
                  <p className="font-medium">{product.kmDriven}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Seats</p>
                  <p className="font-medium">{product.seats}</p>
                </div>
              </div>
            </div>

            <div className="p-6 mt-6 bg-white border rounded-lg">
              <h2 className="text-xl font-bold">Description</h2>
              <p className="mt-4 text-gray-700">{product.description}</p>
            </div>
          </div>

          {/* Right Column - Price and Contact */}
          <div className="space-y-6">
            <div className="p-6 bg-white border rounded-lg">
              <div className="text-2xl font-bold">₹ {product.price}</div>
              <h1 className="mt-2 text-xl font-semibold">{product.title}</h1>
              <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                {product.location}
              </div>
              <div className="flex items-center gap-1 mt-1 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                Posted {product.postedDate}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <Button className="w-full text-white bg-teal-600 hover:bg-teal-700">Call Seller</Button>
                <Button variant="outline" className="w-full">
                  Chat
                </Button>
              </div>

              <div className="flex justify-between mt-4">
                <Button variant="ghost" size="sm" className="text-gray-500">
                  <Share2 className="w-4 h-4 mr-1" />
                  Share
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-500">
                  <Flag className="w-4 h-4 mr-1" />
                  Report
                </Button>
              </div>
            </div>

            <div className="p-6 bg-white border rounded-lg">
              <h2 className="text-lg font-bold">Seller Information</h2>
              <div className="flex items-center gap-3 mt-4">
                <div className="flex items-center justify-center w-12 h-12 text-white bg-teal-600 rounded-full">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">{product.sellerName}</p>
                  <p className="text-sm text-gray-500">{product.sellerType}</p>
                </div>
              </div>
              <Button className="w-full mt-4">View Profile</Button>
            </div>

            <div className="p-6 bg-white border rounded-lg">
              <h2 className="text-lg font-bold">Safety Tips</h2>
              <ul className="mt-4 ml-5 text-sm text-gray-600 list-disc space-y-1.5">
                <li>Meet in a safe, public place</li>
                <li>Check the item before you buy</li>
                <li>Pay only after inspecting the item</li>
                <li>Never pay in advance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
