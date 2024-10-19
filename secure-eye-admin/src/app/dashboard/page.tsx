'use client'

import { useState } from "react"
import Link from "next/link"
import dynamic from 'next/dynamic'
import {
  Camera,
  Bell,
  Settings,
  LogOut,
  Search,
  ChevronDown,
  AlertTriangle,
  FileVideo,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { useRouter } from "next/navigation"

// Dynamically import the Map component with ssr disabled
const MapWithNoSSR = dynamic(() => import('@/components/ui/map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] flex items-center justify-center bg-gray-800 rounded-lg">
      <div className="text-indigo-400">Loading map...</div>
    </div>
  ),
})

export default function Dashboard() {
  const router = useRouter()
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSetCoordinates = (lat: number, lng: number) => {
    setCoordinates({ lat, lng })
    console.log('Selected coordinates:', { lat, lng })
  }

  return (
    <div className="flex flex-col h-screen bg-gray-950 text-gray-100">
      <header className="bg-gray-800 shadow-md">
     <div className="w-full px-4 sm:px-6 lg:px-8">
       <div className="flex items-center justify-between h-16 max-w-[1920px] mx-auto">
         <div className="flex items-center">
           <Camera className="w-8 h-8 mr-2 text-indigo-400" />
           <span className="text-xl font-semibold text-indigo-100">SecureEye Admin</span>
         </div>
         <nav className="hidden md:flex items-center space-x-12">
           <Link href="/dashboard" className="text-gray-300 hover:text-indigo-100 transition-colors duration-200">
             Dashboard
           </Link>
           <Link href="/dashboard/cameras" className="text-gray-300 hover:text-indigo-100 transition-colors duration-200">
             Cameras
           </Link>
           <Link href="/dashboard/recordings" className="text-gray-300 hover:text-indigo-100 transition-colors duration-200">
             Recordings
           </Link>
         </nav>
         <div className="hidden md:flex items-center">
           <div className="relative mr-4">
             <span className="absolute inset-y-0 left-0 flex items-center pl-3">
               <Search className="w-5 h-5 text-gray-400" />
             </span>
             <Input
               type="search"
               placeholder="Search..."
               className="pl-10 pr-4 rounded-lg bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-40 transition-all duration-200 hover:bg-gray-750"
             />
           </div>
           <Button
             variant="ghost"
             size="icon"
             className="relative text-gray-300 hover:text-indigo-100 transition-colors duration-200 hover:bg-gray-800"
           >
             <Bell className="w-5 h-5" />
             <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 transform translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-full">
               3
             </span>
           </Button>
           <UserDropdown />
         </div>
         <div className="md:hidden">
           <Button
             variant="ghost"
             size="icon"
             onClick={() => setIsMenuOpen(!isMenuOpen)}
             className="text-gray-300 hover:text-indigo-100 transition-colors duration-200 hover:bg-gray-800"
           >
             <Menu className="w-6 h-6" />
           </Button>
         </div>
       </div>
     </div>
     {isMenuOpen && (
       <div className="md:hidden">
         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
           <Link href="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
             Dashboard
           </Link>
           <Link href="/dashboard/cameras" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
             Cameras
           </Link>
           <Link href="/dashboard/recordings" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
             Recordings
           </Link>
         </div>
         <div className="pt-4 pb-3 border-t border-gray-700">
           <div className="flex items-center px-5">
             <div className="flex-shrink-0">
               <img className="h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8aIS6GEFUY2LNsXHyd2c435FciiYgJKC4Q&s" alt="User" />
             </div>
             <div className="ml-3">
               <div className="text-base font-medium leading-none text-white">Pro-Koderz</div>
               <div className="text-sm font-medium leading-none text-gray-400">user@example.com</div>
             </div>
             <Button
               variant="ghost"
               size="icon"
               className="ml-auto text-gray-300 hover:text-indigo-100 transition-colors duration-200 hover:bg-gray-800"
             >
               <Bell className="w-6 h-6" />
             </Button>
           </div>
           <div className="mt-3 px-2 space-y-1">
             <Button
               variant="ghost"
               className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
             >
               Settings
             </Button>
             <Button
               variant="ghost"
               className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
             >
               Log out
             </Button>
           </div>
         </div>
       </div>
     )}
   </header>
      
      {/* Main Content Area */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-950 p-6">
        <h1 className="text-3xl font-semibold mb-6 text-indigo-100">
          Dashboard Overview
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <Card className="bg-gray-900 border-gray-800 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300 group-hover:text-indigo-300 transition-colors duration-300">
                Total Cameras
              </CardTitle>
              <Camera className="h-4 w-4 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-indigo-100 group-hover:text-indigo-300 transition-colors duration-300">
                1,259
              </div>
              <p className="text-xs text-indigo-300 group-hover:text-indigo-200 transition-colors duration-300">
                +20 from last month
              </p>
              <Progress
                value={80}
                className="mt-2 bg-gray-700 group-hover:bg-indigo-900/50 transition-colors duration-300"
                indicatorColor="bg-indigo-500"
              />
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300 group-hover:text-green-300 transition-colors duration-300">
                Active Cameras
              </CardTitle>
              <Camera className="h-4 w-4 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-100 group-hover:text-green-300 transition-colors duration-300">
                1,203
              </div>
              <p className="text-xs text-green-300 group-hover:text-green-200 transition-colors duration-300">
                95.5% operational
              </p>
              <Progress
                value={95}
                className="mt-2 bg-gray-700 group-hover:bg-green-900/50 transition-colors duration-300"
                indicatorColor="bg-green-500"
              />
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300 group-hover:text-purple-300 transition-colors duration-300">
                Total Recordings
              </CardTitle>
              <FileVideo className="h-4 w-4 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-100 group-hover:text-purple-300 transition-colors duration-300">
                5,732
              </div>
              <p className="text-xs text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                +103 this week
              </p>
              <Progress
                value={60}
                className="mt-2 bg-gray-700 group-hover:bg-purple-900/50 transition-colors duration-300"
                indicatorColor="bg-purple-500"
              />
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300 group-hover:text-yellow-300 transition-colors duration-300">
                Alerts
              </CardTitle>
              
              <AlertTriangle className="h-4 w-4 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-100 group-hover:text-yellow-300 transition-colors duration-300">
                18
              </div>
              <p className="text-xs text-yellow-300 group-hover:text-yellow-200 transition-colors duration-300">
                4 critical
              </p>
              <Progress
                value={30}
                className="mt-2 bg-gray-700 group-hover:bg-yellow-900/50 transition-colors duration-300"
                indicatorColor="bg-yellow-500"
              />
            </CardContent>
          </Card>
        </div>
        {/* Map Section */}
        <Card className="bg-gray-900 border-gray-800 mb-6 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 group">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-indigo-100 group-hover:text-indigo-300 transition-colors duration-300">
              Camera Locations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
              <MapWithNoSSR setCoordinates={handleSetCoordinates} />
            </div>
          </CardContent>
        </Card>

        {/* Recent Registrations and Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-gray-900 border-gray-800 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 group">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-indigo-100 group-hover:text-indigo-300 transition-colors duration-300">
                Recent Camera Registrations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center bg-gray-800 p-3 rounded-lg hover:bg-gray-750 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full  bg-indigo-500 mr-4 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <Camera className="w-6 h-6 text-indigo-100" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-indigo-100 group-hover:text-indigo-300 transition-colors duration-300">
                        Camera ID: CAM{String(i).padStart(4, "0")}
                      </p>
                      <p className="text-xs text-gray-400 group-hover:text-indigo-200 transition-colors duration-300">
                        Registered on{" "}
                        {new Intl.DateTimeFormat("en-GB").format(new Date())}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="ml-auto bg-indigo-800 text-indigo-100 border-indigo-400 hover:bg-indigo-700 transition-colors duration-300"
                      onClick={() => router.push(`/dashboard/cameras`)}
                    >
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 group">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-indigo-100 group-hover:text-yellow-300 transition-colors duration-300">
                Recent Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center bg-gray-800 p-3 rounded-lg hover:bg-gray-750 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-yellow-500 mr-4 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <AlertTriangle className="w-6 h-6 text-yellow-100" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-yellow-100 group-hover:text-yellow-300 transition-colors duration-300">
                        Alert: Motion Detected
                      </p>
                      <p className="text-xs text-gray-400 group-hover:text-yellow-200 transition-colors duration-300">
                        Camera ID: CAM{String(i).padStart(4, "0")}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="ml-auto bg-yellow-300 text-black border-yellow-500 hover:bg-yellow-500 transition-colors duration-300"
                      onClick={() => router.push(`/dashboard/recordings`)}
                    >
                      Review
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='sm'
          className='ml-4 -mr-2 sm:-mr-6 flex items-center text-gray-300 hover:text-indigo-100 transition-colors duration-200 hover:bg-gray-800'
        >
          <img
            className='w-8 h-8 rounded-full mr-2'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8aIS6GEFUY2LNsXHyd2c435FciiYgJKC4Q&s'
            alt='User'
          />
          <span>Pro-Koderz</span>
          <ChevronDown className='w-4 h-4 ml-2' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        className='w-56 bg-gray-800 text-gray-100 border-gray-700'
      >
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='hover:bg-gray-700 transition-colors duration-200'>
          <Settings className='mr-2 h-4 w-4' />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem className='hover:bg-gray-700 transition-colors duration-200'>
          <LogOut className='mr-2 h-4 w-4' />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}