import Link from "next/link"
import Image from "next/image"
import { Search, Heart, ChevronDown, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import CategoryNav from "@/components/category-nav"
import ProductCard from "@/components/product-card"
import LocationSelector from "@/components/location-selector"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold text-teal-700">
              MarketPlace
            </Link>
            <LocationSelector />
          </div>

          <div className="flex-1 max-w-xl px-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Find Cars, Mobile Phones and more..."
                className="w-full pl-4 pr-10 border border-gray-300 rounded-md h-11"
              />
              <Button size="icon" className="absolute right-0 h-full bg-teal-700 rounded-l-none hover:bg-teal-800">
                <Search className="w-5 h-5 text-white" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Heart className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-1 text-sm font-medium">
              <span>ENGLISH</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <Button variant="ghost" className="font-medium">
              Login
            </Button>
            <Button className="gap-1 font-medium text-white bg-teal-500 hover:bg-teal-600">
              <Plus className="w-4 h-4" /> SELL
            </Button>
          </div>
        </div>
      </header>

      {/* Category Navigation */}
      <CategoryNav />

      {/* Banner */}
      <div className="container px-4 py-4 mx-auto">
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-100 to-blue-50">
          <div className="flex items-center justify-between p-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-800">Just Around: Summer Vibes & Rewards</h2>
              <Button className="bg-blue-600 hover:bg-blue-700">Stay Tuned →</Button>
            </div>
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Promotion"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container px-4 py-4 mx-auto">
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h2 className="mb-4 text-xl font-bold">Filter & Sort</h2>
          <div className="flex flex-wrap gap-4">
            <div className="w-full md:w-auto">
              <select className="w-full h-10 px-3 border border-gray-300 rounded-md">
                <option>Sort By</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Date: Newest First</option>
              </select>
            </div>
            <div className="w-full md:w-auto">
              <Input placeholder="Brand" className="h-10" />
            </div>
            <div className="w-full md:w-auto">
              <select className="w-full h-10 px-3 border border-gray-300 rounded-md">
                <option>Fuel Type</option>
                <option>Petrol</option>
                <option>Diesel</option>
                <option>Electric</option>
              </select>
            </div>
            <div className="w-full md:w-auto">
              <Input placeholder="Max Price" className="h-10" />
            </div>
            <div className="w-full md:w-auto">
              <Input placeholder="Seating" className="h-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Fresh Recommendations */}
      <div className="container px-4 py-6 mx-auto">
        <h2 className="mb-4 text-xl font-bold">Fresh recommendations</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ProductCard
            id="1"
            title="Toyota Camry"
            price="25000"
            location="Kolhapur"
            brand="Toyota"
            fuelType="Petrol"
            seats="5"
            image="/placeholder.svg?height=200&width=300"
            featured={true}
          />
          <ProductCard
            id="2"
            title="Honda Civic"
            price="18000"
            location="Bengaluru"
            brand="Honda"
            fuelType="Petrol"
            seats="5"
            image="/placeholder.svg?height=200&width=300"
          />
          <ProductCard
            id="3"
            title="Hyundai i20"
            price="12000"
            location="Mumbai"
            brand="Hyundai"
            fuelType="Diesel"
            seats="5"
            image="/placeholder.svg?height=200&width=300"
            featured={true}
          />
          <ProductCard
            id="4"
            title="Samsung S23 Ultra"
            price="36000"
            location="Maharashtra"
            category="Mobile Phones"
            condition="6 month old"
            image="/placeholder.svg?height=200&width=300"
          />
        </div>
      </div>
    </div>
  )
}
