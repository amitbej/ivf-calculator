"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react"; // Import Suspense

export default function ResultPage() {
  const searchParams = useSearchParams();
  const successRate = parseFloat(searchParams.get("successRate"));

  return (
    <Suspense fallback={<div>Loading...</div>}> {/* Suspense Boundary */}
      <div className="bg-gradient-to-br from-[#1E1E1E] to-[#2C3E50] flex flex-col justify-center">
        <div className="hidden md:flex items-start pl-28 p-4 space-x-2">
          <Link href="/" className="text-white text-xl font-medium capitalize">
            Home
          </Link>
          <span className="text-white text-xl font-medium capitalize">/</span>
          <Link
            href="/input"
            className="text-white text-xl capitalize hover:text-orange-500"
          >
            IVF-Score
          </Link>
          <span className="text-white text-xl font-medium capitalize">/</span>
          <Link
            href="/result"
            className="text-white font-bold text-xl capitalize hover:text-orange-500"
          >
            Result
          </Link>
        </div>
        <div className="flex pl-6 pt-6 items-center justify-center text-wrap md:hidden">
          <ArrowLeft className="text-white" />
          <Link href="/" className="font-semibold text-white">
            IVF Success Rate Calculator
          </Link>
        </div>
        <div className="py-12 md:py-40 mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 flex flex-col items-center">
              {/* Animated Heading */}
              <div className="flex items-center space-x-4 animate-fade-in">
                <div className="w-4 h-4 bg-[#00FF94] rounded-full pulse-animation" />
                <h1 className="text-3xl md:text-5xl text-white font-bold tracking-tight">
                  Your IVF Success Rate
                </h1>
              </div>

              {/* Success Rate Visualization */}
              <div className="relative w-64 h-64 mx-auto md:mx-0">
                <div className="absolute inset-0 bg-[#00FF94]/10 rounded-full animate-pulse"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#1E1E1E] w-52 h-52 rounded-full shadow-2xl flex items-center justify-center">
                    <span className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FF94] to-[#E15B53]">
                      {successRate.toFixed(0)}%
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-center md:text-left text-lg">
                Estimated Success Rate with 1 IVF Cycle
              </p>
            </div>

            {/* Right Content - Image */}
            <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={"/images/bgimage.png"}
                alt="IVF Success Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Optional Subtle Background Animation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4">
          <Button className="w-full bg-[#E15B53] hover:bg-[#c94c44]">
            Start private consultation →
          </Button>
        </div>
      </div>
    </Suspense>
  );
}
