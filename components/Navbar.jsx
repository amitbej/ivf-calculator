import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function NavBar() {
  return (
    <nav className="bg-white py-4 px-6 border-b-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={"images/ivflogo.svg"}
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/donor"
            className="text-gray-600 font-semibold text-s hover:text-gray-900"
          >
            Donor Programme
          </Link>
          <Link
            href="/preservation"
            className="text-gray-600 font-semibold text-s hover:text-gray-900"
          >
            Fertility Preservation
          </Link>
          <Link
            href="/treatments"
            className="text-gray-600 font-semibold text-s hover:text-gray-900"
          >
            Advanced Treatments
          </Link>
          <Link
            href="/infertility"
            className="text-gray-600 font-semibold text-s hover:text-gray-900"
          >
            Infertility Treatments
          </Link>
          <Link
            href="/testing"
            className="text-gray-600 font-semibold text-s hover:text-gray-900"
          >
            IVF Testing
          </Link>
          <Link
            href="/about"
            className="text-gray-600 font-semibold text-s hover:text-gray-900"
          >
            About Us
          </Link>
          <Button className="bg-red-500 hover:bg-red-600">Talk to Us →</Button>
        </div>
      </div>
    </nav>
  );
}
