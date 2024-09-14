"use client";

import { useEffect, useState } from "react";
import {
  MapPin,
  Menu,
  Camera,
  Users,
  FileText,
  Bell,
  Settings,
  LogOut,
  Search,
  ChevronDown,
  BarChart2,
  AlertTriangle,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import { Progress } from "../../../components/ui/progress";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-950 text-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-center h-16 bg-gray-800">
          <Camera className="w-8 h-8 mr-2 text-indigo-400" />
          <span className="text-xl font-semibold text-indigo-100">
            CamSafe Admin
          </span>
        </div>
        <nav className="mt-5 px-2">
          <a
            className="flex items-center px-4 py-2 text-indigo-100 bg-indigo-800 rounded-lg"
            href="#"
          >
            <MapPin className="w-5 h-5 mr-3" />
            Dashboard
          </a>
          <a
            className="flex items-center px-4 py-2 mt-2 text-gray-300 hover:bg-gray-800 hover:text-indigo-100 rounded-lg transition-colors duration-200"
            href="#"
          >
            <Camera className="w-5 h-5 mr-3" />
            Cameras
          </a>
          <a
            className="flex items-center px-4 py-2 mt-2 text-gray-300 hover:bg-gray-800 hover:text-indigo-100 rounded-lg transition-colors duration-200"
            href="#"
          >
            <Users className="w-5 h-5 mr-3" />
            Users
          </a>
          <a
            className="flex items-center px-4 py-2 mt-2 text-gray-300 hover:bg-gray-800 hover:text-indigo-100 rounded-lg transition-colors duration-200"
            href="#"
          >
            <FileText className="w-5 h-5 mr-3" />
            Reports
          </a>
          <a
            className="flex items-center px-4 py-2 mt-2 text-gray-300 hover:bg-gray-800 hover:text-indigo-100 rounded-lg transition-colors duration-200"
            href="#"
          >
            <BarChart2 className="w-5 h-5 mr-3" />
            Analytics
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="flex items-center justify-between px-6 py-4 bg-gray-900">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-300 focus:outline-none lg:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative ml-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="w-5 h-5 text-gray-400" />
              </span>
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 pr-4 rounded-lg bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-40"
              />
            </div>
          </div>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="relative text-gray-300 hover:text-indigo-100"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 transform translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-full">
                3
              </span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-4 flex items-center text-gray-300 hover:text-indigo-100"
                >
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8aIS6GEFUY2LNsXHyd2c435FciiYgJKC4Q&s"
                    alt="User"
                  />
                  <span>John Doe</span>
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 bg-gray-800 text-gray-100 border-gray-700"
              >
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-gray-700">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-700">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-950 p-6">
          <h1 className="text-3xl font-semibold mb-6 text-indigo-100">
            Dashboard Overview
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card className="bg-gray-900 border-gray-800 hover:border-indigo-500 transition-colors duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Total Cameras
                </CardTitle>
                <Camera className="h-4 w-4 text-indigo-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-indigo-100">1,259</div>
                <p className="text-xs text-indigo-300">+20 from last month</p>
                <Progress
                  value={80}
                  className="mt-2 bg-gray-700"
                  indicatorColor="bg-indigo-500"
                />
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800 hover:border-green-500 transition-colors duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Active Cameras
                </CardTitle>
                <Camera className="h-4 w-4 text-green-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-100">1,203</div>
                <p className="text-xs text-green-300">95.5% operational</p>
                <Progress
                  value={95}
                  className="mt-2 bg-gray-700"
                  indicatorColor="bg-green-500"
                />
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800 hover:border-purple-500 transition-colors duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Registered Users
                </CardTitle>
                <Users className="h-4 w-4 text-purple-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-100">573</div>
                <p className="text-xs text-purple-300">+5 this week</p>
                <Progress
                  value={60}
                  className="mt-2 bg-gray-700"
                  indicatorColor="bg-purple-500"
                />
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800 hover:border-yellow-500 transition-colors duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">
                  Alerts
                </CardTitle>
                <AlertTriangle className="h-4 w-4 text-yellow-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-100">18</div>
                <p className="text-xs text-yellow-300">4 critical</p>
                <Progress
                  value={30}
                  className="mt-2 bg-gray-700"
                  indicatorColor="bg-yellow-500"
                />
              </CardContent>
            </Card>
          </div>

          {/* Map Section */}
          <Card className="bg-gray-900 border-gray-800 mb-6">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-indigo-100">
                Camera Locations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-800 rounded-md flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-500 bg-opacity-10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-indigo-500 animate-pulse" />
                </div>
                <p className="text-gray-400 z-10">Interactive Map Component</p>
              </div>
            </CardContent>
          </Card>

          {/* Recent Registrations and Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-indigo-100">
                  Recent Camera Registrations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center bg-gray-800 p-3 rounded-lg"
                    >
                      <div className="w-10 h-10 rounded-full bg-indigo-500 mr-4 flex items-center justify-center">
                        <Camera className="w-6 h-6 text-indigo-100" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-indigo-100">
                          Camera ID: CAM{String(i).padStart(4, "0")}
                        </p>
                        <p className="text-xs text-gray-400">
                          Registered on{" "}
                          {new Intl.DateTimeFormat("en-GB").format(new Date())}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="ml-auto text-indigo-100 border-indigo-500 hover:bg-indigo-700"
                      >
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-indigo-100">
                  Recent Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center bg-gray-800 p-3 rounded-lg"
                    >
                      <div className="w-10 h-10 rounded-full bg-yellow-500 mr-4 flex items-center justify-center">
                        <AlertTriangle className="w-6 h-6 text-yellow-100" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-yellow-100">
                          Alert: Motion Detected
                        </p>
                        <p className="text-xs text-gray-400">
                          Camera ID: CAM{String(i).padStart(4, "0")} 
                        </p>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="ml-auto text-yellow-100 border-yellow-500 hover:bg-yellow-700"
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
    </div>
  );
}
