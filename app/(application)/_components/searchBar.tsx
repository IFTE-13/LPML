"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Home, Wallet, BedDouble } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const propertyTypes = ["Apartment", "House", "Villa", "Townhouse"];
const priceRanges = [
  "Up to €250,000",
  "€250,000 – €500,000",
  "€500,000 – €1,000,000",
  "€1,000,000+",
];
const bedOptions = ["1+", "2+", "3+", "4+"];

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [beds, setBeds] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (propertyType) params.set("type", propertyType);
    if (priceRange) params.set("price", priceRange);
    if (beds) params.set("beds", beds);
    router.push(`/woningen?${params.toString()}`);
  };

  return (
    <div className="relative z-20 mx-auto -mt-12 max-w-7xl px-6 lg:-mt-16">
      <div className="bg-card shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] ring-1 ring-border">
        <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-[1.2fr_1fr_1fr_0.8fr_auto]">
          {/* Location */}
          <div className="flex items-center gap-3 px-5 py-4">
            <MapPin className="h-4 w-4 shrink-0 text-accent" />
            <div className="min-w-0 flex-1">
              <label className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Location
              </label>
              <Input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City or address"
                className="h-auto border-0 p-0 text-sm text-foreground shadow-none placeholder:text-muted-foreground/60 focus-visible:ring-0 dark:bg-transparent"
              />
            </div>
          </div>

          {/* Property Type */}
          <div className="flex items-center gap-3 px-5 py-4">
            <Home className="h-4 w-4 shrink-0 text-accent" />
            <div className="min-w-0 flex-1">
              <label className="px-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Property Type
              </label>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="h-auto w-full border-0 text-sm text-foreground shadow-none focus-visible:ring-0 [&>svg]:opacity-50 dark:bg-transparent hover:dark:bg-transparent hover:cursor-pointer">
                  <SelectValue placeholder="Any type" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Price Range */}
          <div className="flex items-center gap-3 px-5 py-4">
            <Wallet className="h-4 w-4 shrink-0 text-accent" />
            <div className="min-w-0 flex-1">
              <label className="px-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Price Range
              </label>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="h-auto w-full border-0 text-sm text-foreground shadow-none focus-visible:ring-0 [&>svg]:opacity-50 dark:bg-transparent hover:dark:bg-transparent hover:cursor-pointer">
                  <SelectValue placeholder="Any price" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Beds */}
          <div className="flex items-center gap-3 px-5 py-4">
            <BedDouble className="h-4 w-4 shrink-0 text-accent" />
            <div className="min-w-0 flex-1">
              <label className="px-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Beds
              </label>
              <Select value={beds} onValueChange={setBeds}>
                <SelectTrigger className="h-auto w-full border-0 text-sm text-foreground shadow-none focus-visible:ring-0 [&>svg]:opacity-50 dark:bg-transparent hover:dark:bg-transparent hover:cursor-pointer">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  {bedOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Search button */}
          <Button
            onClick={handleSearch}
            className="h-auto rounded-none bg-foreground px-8 py-6 text-sm font-medium text-background shadow-none hover:bg-accent hover:text-accent-foreground sm:col-span-2 lg:col-span-1"
          >
            <Search className="h-4 w-4" />
            <span className="lg:hidden">Search properties</span>
          </Button>
        </div>
      </div>
    </div>
  );
}