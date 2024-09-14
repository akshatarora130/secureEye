"use client";

import { GlobeDemo } from "../components/myglobe";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import div2 from "../../public/div2.png";
import { CardHoverEffectDemo } from "@/components/myhovereffect";
import { TracingBeam } from "../../components/ui/tracing-beam";
import { AnimatedTooltipPreview } from "@/components/tooltip";
import { Suspense } from "react";
import Link from "next/link";
import { Camera, Lock, Zap, DollarSign, Shield, FileCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <div className="min-h-screen bg-black text-white">
      <TracingBeam className="overflow-hidden">
        <nav className="flex flex-col lg:flex-row lg:justify-between lg:items-center bg-dark-800 text-white py-4 px-6 sticky top-0 z-10">
          <div className="flex items-center mb-4 lg:mb-0">
            <h1 className="text-2xl font-bold ml-8">SecureEye</h1>
          </div>

          {session ? (
            <div className="flex justify-center lg:justify-end items-center space-x-4">
              <Button
                variant="outline"
                className="rounded-full hover:bg-slate-600 hover:text-white transition-colors"
                onClick={() => {
                  router.push("/user-dashboard");
                }}
              >
                Dashboard
              </Button>
              <Link href="/camera/form">
                <Button
                  variant="outline"
                  className="rounded-full hover:bg-slate-600 hover:text-white transition-colors"
                >
                  Add Camera
                </Button>
              </Link>
              <Button
                variant="default"
                className="rounded-3xl bg-gray-600 hover:bg-white hover:text-black transition-colors"
                onClick={() => {
                  signOut();
                }}
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex justify-center items-center space-x-4">
              <Button
                variant="default"
                className="rounded-3xl bg-gray-600 hover:bg-white hover:text-black transition-colors"
                onClick={() => {
                  router.push("/login");
                }}
              >
                Login
              </Button>
            </div>
          )}
        </nav>

        <div className="flex flex-col lg:flex-row justify-center items-center py-10 px-6 lg:px-20 overflow-hidden">
          <div className="flex-1 lg:pr-12 mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up	">
              Geo-Tagging System
            </h1>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up	">
              for Private Cameras{" "}
            </h1>
            <p className="text-lg text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
              SecureEye is a user-friendly geo-tagging system designed to
              enhance law enforcement access to crucial footage, providing
              real-time alerts and ensuring swift response for improved public
              safety.
            </p>
            <Button
              variant="outline"
              className="rounded-3xl bg-gray-600 hover:bg-white hover:text-black transition-colors"
              size="lg"
            >
              Get Started
            </Button>
          </div>
          <div className="flex-1 w-full lg:w-4/5 h-[400px] lg:h-[600px]">
            <Suspense
              fallback={
                <div className="w-full h-full bg-gray-800 rounded-lg animate-pulse" />
              }
            >
              <GlobeDemo />
            </Suspense>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center bg-white text-black py-20 px-6 lg:px-20">
          <div className="flex-1 lg:pr-12 mb-12 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Geo-Tag Process
            </h2>
            <p className="text-lg mb-8">
              Simple, secure, and efficient geo-tagging.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-gray-900 transition-colors"
              onClick={() => {
                router.push("/camera/form");
              }}
            >
              Add Camera
            </Button>
          </div>
          <div className="flex-1">
            <div
              className="rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105"
              style={{
                backgroundImage: `url(${div2.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px",
                width: "100%",
              }}
            />
          </div>
        </div>
        <section className="bg-white text-gray-800 py-20 px-6 lg:px-20">
          <div className="container mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
              How GeoCamGuard Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  icon: Camera,
                  title: "Precise Geo-Tagging",
                  description:
                    "Accurately map your camera locations for optimal coverage.",
                  colorClass: "text-blue-600",
                  bgColorClass: "bg-blue-100",
                },
                {
                  icon: Lock,
                  title: "Privacy Control",
                  description:
                    "You maintain full control over your camera data and access.",
                  colorClass: "text-green-600",
                  bgColorClass: "bg-green-100",
                },
                {
                  icon: Zap,
                  title: "Quick Integration",
                  description:
                    "Easily connect your existing cameras to our secure network.",
                  colorClass: "text-purple-600",
                  bgColorClass: "bg-purple-100",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-100 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div
                    className={`${item.bgColorClass} rounded-full p-6 inline-block mb-6`}
                  >
                    <item.icon className={`w-10 h-10 ${item.colorClass}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-black text-white py-20 px-6 lg:px-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            Why Add Your Camera?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: DollarSign,
                title: "50% Subsidy",
                description:
                  "Get up to 50% off your camera cost for every verified camera you add.",
              },
              {
                icon: Shield,
                title: "Enhance Public Safety",
                description:
                  "Help law enforcement resolve more cases and improve community security.",
              },
              {
                icon: FileCheck,
                title: "Licensed Operation",
                description:
                  "Receive official licensing from police administration for authorized use.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white text-black rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="bg-black rounded-full p-6 inline-block mb-6">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white w-full text-center py-20 px-6 lg:px-20">
          <div className="bg-black rounded-lg text-white p-12 shadow-2xl transform transition-all duration-500 hover:scale-105">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Geo-Tag?
            </h2>
            <p className="text-lg mb-8">
              Enhance your security with SecureEye today.
            </p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 transition-colors"
              onClick={() => {
                router.push("/camera/form");
              }}
            >
              Add Camera
            </Button>
          </div>
        </div>

        <div className="bg-white text-black py-12 px-6 lg:px-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
            SecureEye in Action
          </h2>
          <p className="text-lg text-gray-800 mb-8 text-center">
            See how our technology is making a difference.
          </p>
          <CardHoverEffectDemo />
        </div>

        <div className="bg-black mt-6 px-6 lg:px-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">
            Our Development Team
          </h2>
          <AnimatedTooltipPreview />
        </div>
      </TracingBeam>

      <footer className="bg-dark-800 text-white px-6 lg:px-20 flex justify-center items-center py-6">
        <div className="container mx-auto flex justify-center items-center">
          <h3 className="text-lg font-semibold text-center">
            Created with ❤️ By Team Pro_Koders
          </h3>
        </div>
      </footer>
    </div>
  );
}
