'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Camera,
  Bell,
  Settings,
  LogOut,
  Search,
  ChevronDown,
  BarChart2,
  AlertTriangle,
  FileVideo
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Progress } from '@/components/ui/progress'

export default function Dashboard() {
  return (
    <div className='flex flex-col h-screen bg-gray-950 text-gray-100'>
      {/* Navbar */}
      <header className='flex items-center justify-between px-6 py-4 bg-gray-900'>
        <div className='flex items-center'>
          <Camera className='w-8 h-8 mr-2 text-indigo-400' />
          <span className='text-xl font-semibold text-indigo-100'>SecureEye Admin</span>
        </div>
        <nav className='flex items-center space-x-4'>
          <Link href="/dashboard" className='text-gray-300 hover:text-indigo-100 transition-colors duration-200'>
            Dashboard
          </Link>
          <Link href="/dashboard/cameras" className='text-gray-300 hover:text-indigo-100 transition-colors duration-200'>
            Cameras
          </Link>
          <Link href="/dashboard/recordings" className='text-gray-300 hover:text-indigo-100 transition-colors duration-200'>
            Recordings
          </Link>
        </nav>
        <div className='flex items-center'>
          <div className='relative mr-4'>
            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
              <Search className='w-5 h-5 text-gray-400' />
            </span>
            <Input
              type='search'
              placeholder='Search...'
              className='pl-10 pr-4 rounded-lg bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-40 transition-all duration-200 hover:bg-gray-750'
            />
          </div>
          <Button
            variant='ghost'
            size='icon'
            className='relative text-gray-300 hover:text-indigo-100 transition-colors duration-200 hover:bg-gray-800'
          >
            <Bell className='w-5 h-5' />
            <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 transform translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-full'>
              3
            </span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='ghost'
                size='sm'
                className='ml-4 flex items-center text-gray-300 hover:text-indigo-100 transition-colors duration-200 hover:bg-gray-800'
              >
                <img
                  className='w-8 h-8 rounded-full mr-2'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8aIS6GEFUY2LNsXHyd2c435FciiYgJKC4Q&s'
                  alt='User'
                />
                <span>John Doe</span>
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
        </div>
      </header>

      {/* Main Content Area */}
      <main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-950 p-6'>
        <h1 className='text-3xl font-semibold mb-6 text-indigo-100'>Dashboard Overview</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6'>
          <Card className='bg-gray-900 border-gray-800 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 group'>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium text-gray-300 group-hover:text-indigo-300 transition-colors duration-300'>
                Total Cameras
              </CardTitle>
              <Camera className='h-4 w-4 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold text-indigo-100 group-hover:text-indigo-300 transition-colors duration-300'>
                1,259
              </div>
              <p className='text-xs text-indigo-300 group-hover:text-indigo-200 transition-colors duration-300'>
                +20 from last month
              </p>
              <Progress
                  value={80}
                  className='mt-2 bg-gray-700 group-hover:bg-indigo-900/50 transition-colors duration-300'
                  indicatorColor='bg-indigo-500'
                />
            </CardContent>
          </Card>
          <Card className='bg-gray-900 border-gray-800 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 group'>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium text-gray-300 group-hover:text-green-300 transition-colors duration-300'>
                Active Cameras
              </CardTitle>
              <Camera className='h-4 w-4 text-green-400 group-hover:text-green-300 transition-colors duration-300' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold text-green-100 group-hover:text-green-300 transition-colors duration-300'>
                1,203
              </div>
              <p className='text-xs text-green-300 group-hover:text-green-200 transition-colors duration-300'>
                95.5% operational
              </p>
              <Progress
                  value={95}
                  className='mt-2 bg-gray-700 group-hover:bg-green-900/50 transition-colors duration-300'
                  indicatorColor='bg-green-500'
                />
            </CardContent>
          </Card>
          <Card className='bg-gray-900 border-gray-800 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 group'>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium text-gray-300 group-hover:text-purple-300 transition-colors duration-300'>
                Total Recordings
              </CardTitle>
              <FileVideo className='h-4 w-4 text-purple-400 group-hover:text-purple-300 transition-colors duration-300' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold text-purple-100 group-hover:text-purple-300 transition-colors duration-300'>
                5,732
              </div>
              <p className='text-xs text-purple-300 group-hover:text-purple-200 transition-colors duration-300'>
                +103 this week
              </p>
              <Progress
                  value={60}
                  className='mt-2 bg-gray-700 group-hover:bg-purple-900/50 transition-colors duration-300'
                  indicatorColor='bg-purple-500'
                />
            </CardContent>
          </Card>
          <Card className='bg-gray-900 border-gray-800 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 group'>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium text-gray-300 group-hover:text-yellow-300 transition-colors duration-300'>
                Alerts
              </CardTitle>
              <AlertTriangle className='h-4 w-4 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold text-yellow-100 group-hover:text-yellow-300 transition-colors duration-300'>
                18
              </div>
              <p className='text-xs text-yellow-300 group-hover:text-yellow-200 transition-colors duration-300'>
                4 critical
              </p>
              <Progress
                  value={30}
                  className='mt-2 bg-gray-700 group-hover:bg-yellow-900/50 transition-colors duration-300'
                  indicatorColor='bg-yellow-500'
                />
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <Card className='bg-gray-900 border-gray-800 mb-6 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 group'>
          <CardHeader>
            <CardTitle className='text-xl font-semibold text-indigo-100 group-hover:text-indigo-300 transition-colors duration-300'>
              Camera Locations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='aspect-video bg-gray-800 rounded-md flex items-center justify-center relative overflow-hidden group'>
              <div className='absolute inset-0 bg-indigo-500 bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300'></div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <Camera className='w-16 h-16 text-indigo-500 animate-pulse group-hover:scale-110 transition-all duration-300' />
              </div>
              <p className='text-gray-400 z-10 group-hover:text-indigo-100 transition-colors duration-300'>
                Interactive Map Component
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Registrations and Alerts */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <Card className='bg-gray-900 border-gray-800 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 group'>
            <CardHeader>
              <CardTitle className='text-xl font-semibold text-indigo-100 group-hover:text-indigo-300 transition-colors duration-300'>
                Recent Camera Registrations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className='flex items-center bg-gray-800 p-3 rounded-lg hover:bg-gray-750 transition-all duration-300 group'
                  >
                    <div className='w-10 h-10 rounded-full bg-indigo-500 mr-4 flex items-center justify-center group-hover:scale-110 transition-all duration-300'>
                      <Camera className='w-6 h-6 text-indigo-100' />
                    </div>
                    <div>
                      <p className='text-sm font-medium text-indigo-100 group-hover:text-indigo-300 transition-colors duration-300'>
                        Camera ID: CAM{String(i).padStart(4, '0')}
                      </p>
                      <p className='text-xs text-gray-400 group-hover:text-indigo-200 transition-colors duration-300'>
                          Registered on {new Intl.DateTimeFormat('en-GB').format(new Date())}
                        </p>
                    </div>
                    <Button
                        size='sm'
                        variant='outline'
                        className='ml-auto bg-indigo-800 text-indigo-100 border-indigo-400 hover:bg-indigo-700 transition-colors duration-300'
                      >
                        View
                      </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className='bg-gray-900 border-gray-800 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 group'>
            <CardHeader>
              <CardTitle className='text-xl font-semibold text-indigo-100 group-hover:text-yellow-300 transition-colors duration-300'>
                Recent Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className='flex items-center bg-gray-800 p-3 rounded-lg hover:bg-gray-750 transition-all duration-300 group'
                  >
                    <div className='w-10 h-10 rounded-full bg-yellow-500 mr-4 flex items-center justify-center group-hover:scale-110 transition-all duration-300'>
                      <AlertTriangle className='w-6 h-6 text-yellow-100' />
                    </div>
                    <div>
                      <p className='text-sm font-medium text-yellow-100 group-hover:text-yellow-300 transition-colors duration-300'>
                        Alert: Motion Detected
                      </p>
                      <p className='text-xs text-gray-400 group-hover:text-yellow-200 transition-colors duration-300'>
                        Camera ID: CAM{String(i).padStart(4, '0')}
                      </p>
                    </div>
                    <Button
                      size='sm'
                      variant='outline'
                      className='ml-auto bg-yellow-300 text-black border-yellow-500 hover:bg-yellow-500 transition-colors duration-300'
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