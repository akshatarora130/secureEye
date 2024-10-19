'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Camera, Bell, Settings, LogOut, Search, ChevronDown, BarChart2, AlertTriangle, FileVideo } from "lucide-react";

interface CameraData {
  id: string
  name: string
  location: string
  status: 'pending' | 'approved' | 'declined'
  addedBy: string
  dateAdded: string
}

const mockCameras: CameraData[] = [
  { id: 'CAM0001', name: 'Front Door Camera', location: '123 Main St', status: 'pending', addedBy: 'user@example.com', dateAdded: '2023-05-15' },
  { id: 'CAM0002', name: 'Backyard Camera', location: '456 Elm St', status: 'approved', addedBy: 'user2@example.com', dateAdded: '2023-05-16' },
  { id: 'CAM0003', name: 'Garage Camera', location: '789 Oak St', status: 'pending', addedBy: 'user3@example.com', dateAdded: '2023-05-17' },
  { id: 'CAM0004', name: 'Side Entrance Camera', location: '101 Pine St', status: 'approved', addedBy: 'user4@example.com', dateAdded: '2023-05-18' },
]

export default function CamerasPage() {
  const [cameras, setCameras] = useState<CameraData[]>(mockCameras)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCamera, setSelectedCamera] = useState<CameraData | null>(null)

  const handleApprove = (id: string) => {
    setCameras(cameras.map(cam => 
      cam.id === id ? { ...cam, status: 'approved' } : cam
    ))
    setSelectedCamera(null)
  }

  const handleDecline = (id: string) => {
    setCameras(cameras.map(cam => 
      cam.id === id ? { ...cam, status: 'declined' } : cam
    ))
    setSelectedCamera(null)
  }

  const filteredCameras = cameras.filter(camera =>
    camera.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    camera.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
     
			<header className='flex items-center justify-between px-6 py-4 bg-gray-900'>
				<div className='flex items-center'>
					<Camera className='w-8 h-8 mr-2 text-indigo-400' />
					<span className='text-xl font-semibold text-indigo-100'>SecureEye Admin</span>
				</div>
				<nav className='flex items-center space-x-4'>
					<Link
						href='/dashboard'
						className='text-gray-300 hover:text-indigo-100 transition-colors duration-200'>
						Dashboard
					</Link>
					<Link
						href='/dashboard/cameras'
						className='text-gray-300 hover:text-indigo-100 transition-colors duration-200'>
						Cameras
					</Link>
					<Link
						href='/dashboard/recordings'
						className='text-gray-300 hover:text-indigo-100 transition-colors duration-200'>
						Recordings
					</Link>
				</nav>
				<div className='flex items-center'>
					<div className='relative mr-4'>
						<Input
							type='text'
							placeholder='Search recordings...'
							value={searchTerm}
							onChange={(e: any) => setSearchTerm(e.target.value)}
						/>
					</div>
					<Button
						variant='ghost'
						size='icon'
						className='relative text-gray-300 hover:text-indigo-100 transition-colors duration-200 hover:bg-gray-800'>
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
								className='ml-4 flex items-center text-gray-300 hover:text-indigo-100 transition-colors duration-200 hover:bg-gray-800'>
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
							className='w-56 bg-gray-800 text-gray-100 border-gray-700'>
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
      
      <div className='flex justify-between items-center m-6'>
				<h1 className='text-2xl font-bold'>Cameras</h1>
			</div>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold">All Cameras</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Camera ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Added By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date Added</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredCameras.map((camera) => (
                <tr key={camera.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{camera.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{camera.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{camera.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{camera.addedBy}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{camera.dateAdded}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      camera.status === 'approved' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                    }`}>
                      {camera.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button variant="outline" onClick={() => setSelectedCamera(camera)} className='bg-gray-900'>
                      Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedCamera && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Camera Details: {selectedCamera.id}</h2>
            <div className="grid gap-4">
              <div>
                <span className="font-medium text-gray-400">Name:</span>
                <span className="ml-2">{selectedCamera.name}</span>
              </div>
              <div>
                <span className="font-medium text-gray-400">Location:</span>
                <span className="ml-2">{selectedCamera.location}</span>
              </div>
              <div>
                <span className="font-medium text-gray-400">Added By:</span>
                <span className="ml-2">{selectedCamera.addedBy}</span>
              </div>
              <div>
                <span className="font-medium text-gray-400">Date Added:</span>
                <span className="ml-2">{selectedCamera.dateAdded}</span>
              </div>
              <div>
                <span className="font-medium text-gray-400">Status:</span>
                <span className="ml-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    selectedCamera.status === 'approved' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                  }`}>
                    {selectedCamera.status}
                  </span>
                </span>
              </div>
            </div>
            {selectedCamera.status === 'pending' && (
              <div className="flex justify-end gap-4 mt-6">
                <Button onClick={() => handleApprove(selectedCamera.id)}>
                  Approve
                </Button>
                <Button variant="destructive" onClick={() => handleDecline(selectedCamera.id)}>
                  Decline
                </Button>
              </div>
            )}
            <Button className="mt-4" onClick={() => setSelectedCamera(null)}>Close</Button>
          </div>
        </div>
      )}
    </div>
  )
}