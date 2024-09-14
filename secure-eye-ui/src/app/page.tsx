//import Image from "next/image";
import { GlobeDemo } from "../components/myglobe";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import div2 from "../../public/div2.png";
import { CardHoverEffectDemo } from "@/components/myhovereffect";
import { TracingBeam } from "../../components/ui/tracing-beam";
import { AnimatedTooltipPreview } from "@/components/tooltip";
import { Suspense } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <TracingBeam>
        <nav className="flex flex-col lg:flex-row lg:justify-between lg:items-center bg-dark-800 text-white py-4 px-6">
          {/* Left side */}
          <div className="flex items-center mb-4 lg:mb-0">
            <h1 className="text-lg font-bold mr-4">SecureEye</h1>
          </div>

          {/* Middle section */}
          <div className="flex items-center justify-center lg:justify-start space-x-6 mb-4 lg:mb-0">
            <a href="#" className="hover:text-gray-300">
              Dashboard
            </a>
            <a href="#" className="hover:text-gray-300">
              Messaging
            </a>
            <a href="#" className="hover:text-gray-300">
              Notification
            </a>
            <a href="#" className="hover:text-gray-300">
              Help Center
            </a>
          </div>

          {/* Right side */}
          <div className="flex justify-center lg:justify-end items-center space-x-4">
            <button className="hover:bg-slate-800 text-white border border-white font-bold py-2 px-4 rounded">
              Admin
            </button>
            <Link href="/camera">
              <button className="bg-white hover:bg-slate-600 text-black font-bold py-2 px-4 rounded">
                Add Camera
              </button>
            </Link>
          </div>
        </nav>

        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="flex-1 p-6 lg:p-20">
            <h1 className="text-xl lg:text-3xl font-bold text-white text-center lg:text-left">
              Proactive Geo-Tagging System <br /> for Private Cameras
            </h1>
            <p className="text-sm lg:text-base pt-2 text-white text-center lg:text-left">
              GeoCamGuard is a user-friendly geo-tagging system <br /> designed
              to enhance law enforcement access to crucial footage, <br />{" "}
              providing real-time alerts and ensuring swift response for <br />{" "}
              improved public safety.
            </p>
          </div>
          <div className="flex-1 w-4/5 mr-2 h-1/2 mt-0">
            <Suspense
              fallback={
                <div className="flex h-full w-full  bg-white justify-center items-center">
                  <div className="border-4 border-gray-200 border-t-4 border-t-gray-700 rounded-full w-12 h-12 text-white animate-spin">
                    Loaging
                  </div>
                </div>
              }
            >
              <GlobeDemo />
            </Suspense>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center bg-white text-black pt-20">
          <div className="flex-1 p-6 lg:p-20 lg:order-1 px-5">
            <h2 className="text-xl lg:text-3xl font-bold text-center lg:text-left">
              Our Geo-Tag Process
            </h2>
            <p className="text-sm pt-5">
              Simple, secure, and efficient geo-tagging.
            </p>
            <Button variant="outline" className="text-white mt-10">
              Add Camera
            </Button>
          </div>

          <div
            className="flex-1 div2-img h-full w-full lg:order-2 rounded-md mr-10"
            style={{
              backgroundImage: `url(${div2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "200px",
              width: "200px",
            }}
          ></div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center text-center bg-white text-black p-20">
          <div className="w-full lg:w-1/3">
            <h2 className="font-semibold text-lg">Geo-Location</h2>
            <p className="text-sm">Pinpoint accuracy in geo-tagging.</p>
          </div>
          <div className="w-full lg:w-1/3">
            <h2 className="font-semibold text-lg">Privacy Control</h2>
            <p className="text-sm">You own and control your data.</p>
          </div>
          <div className="w-full lg:w-1/3">
            <h2 className="font-semibold text-lg">Easy Integration</h2>
            <p className="text-sm">Works with your existing cameras.</p>
          </div>
        </div>

        <div className="bg-white w-full text-center">
          <div className="flex bg-black mx-6 lg:mx-60 rounded-lg text-white align-center justify-center flex-col text-center p-10 ">
            <h2 className="text-3xl font-semibold">Ready to Geo-Tag?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <Button className="pt-10">Add Camera</Button>
          </div>
        </div>

        <div className="bg-white">
          <div className="pt-10 p-20">
            <h2 className="text-3xl font-bold">Secure Eye in Action</h2>
            <p className="text-sm pt-2">
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>

          <div className="w-full">
            <CardHoverEffectDemo />
          </div>
        </div>

        <div className="flex flex-col text-center bg-black-700">
          <h2 className="text-white py-5">Our Development Team</h2>
          <AnimatedTooltipPreview />
        </div>
      </TracingBeam>

      <div className="w-full text-center font-thin text-white  p-16 flex flex-wrap justify-center gap-8 lg:justify-between lg:gap-0 lg:w-auto">
        <div className="flex flex-col text-sm lg:mb-0 p-1">
          <h3 className="mb-4 font-semibold text-xl">Company</h3>
          <p>Latest Updates</p>
          <p>Our Story</p>
          <p>Join Up</p>
        </div>
        <div className="flex flex-col text-sm mb-8 lg:mb-0 p-1">
          <h3 className="mb-4 font-semibold text-xl">Product Features</h3>
          <p>Feature 1</p>
          <p>Feature 2</p>
          <p>Feature 3</p>
        </div>
        <div className="flex flex-col text-sm mb-8 lg:mb-0 p-1">
          <h3 className="mb-4 font-semibold text-xl">Follow Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>

        <div className="flex flex-col text-sm mb-8 lg:mb-0 p-1">
          <h3 className="mb-4 font-semibold text-xl">Join our Newsletter</h3>
          <div className="newsletter-form w-full text-white flex justify-center">
            <div className="flex flex-col">
              <h3>Get tips and updates on maximizing your geo-tagging.</h3>
              <div className="flex w-full max-w-sm items-center py-5 space-x-2 border-8 border-indigo-900 outline-8	outline-white	">
                <Input
                  type="email"
                  placeholder="Email"
                  className="border-8	bg-white border-indigo-900	shadow-lg outline-8	outline-white	"
                />
                <Button type="submit" variant="outline">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
