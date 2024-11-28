import Image from "next/image";
import { HeartPulse, Baby, Users, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="bg-[#FCFAF5] flex flex-col items-center min-h-screen justify-center">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="  py-20">
          <div className="container mx-auto px-10 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Your Journey to Parenthood Starts Here
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Expert care and advanced fertility treatments tailored to your
                needs.
              </p>
              <Link href={"/input"}>
                <Button>Check Your IVF Score</Button>
              </Link>
            </div>

            <div className="md:w-1/2">
              <Image
                src={"/images/motherchild.jpg"}
                width={600}
                height={400}
                alt="Picture of the author"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="  rounded-3xl py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Expert Team",
                  description: "Board-certified fertility specialists",
                  icon: Users,
                },
                {
                  title: "Personalized Care",
                  description: "Tailored treatment plans for each patient",
                  icon: HeartPulse,
                },
                {
                  title: "Advanced Technology",
                  description: "State-of-the-art equipment and techniques",
                  icon: Baby,
                },
                {
                  title: "Compassionate Support",
                  description: "Emotional guidance throughout your journey",
                  icon: Phone,
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex border p-4 rounded-2xl flex-col items-center text-center"
                >
                  <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
