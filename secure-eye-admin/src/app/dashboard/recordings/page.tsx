"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Camera, Bell, Settings, LogOut, Search, ChevronDown, BarChart2, AlertTriangle, FileVideo, Menu } from "lucide-react";

interface RecordingData {
  id: string;
  cameraId: string;
  cameraName: string;
  date: string;
  duration: string;
  threatDetected: boolean;
  videoUrl: string;
}

const mockRecordings: RecordingData[] = [
  {
    id: "REC0001",
    cameraId: "CAM0001",
    cameraName: "Front Door Camera",
    date: "2023-05-20",
    duration: "00:30:00",
    threatDetected: false,
    videoUrl: "/placeholder.mp4",
  },
  {
    id: "REC0002",
    cameraId: "CAM0002",
    cameraName: "Backyard Camera",
    date: "2023-05-20",
    duration: "00:45:00",
    threatDetected: true,
    videoUrl: "/placeholder.mp4",
  },
  {
    id: "REC0003",
    cameraId: "CAM0004",
    cameraName: "Side Entrance Camera",
    date: "2023-05-21",
    duration: "01:00:00",
    threatDetected: false,
    videoUrl: "/placeholder.mp4",
  },
  {
    id: "REC0004",
    cameraId: "CAM0001",
    cameraName: "Terrace Camera",
    date: "2023-05-21",
    duration: "00:15:00",
    threatDetected: true,
    videoUrl: "/placeholder.mp4",
  },
];

export default function RecordingsPage() {
  const [recordings, setRecordings] = useState<RecordingData[]>(mockRecordings);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecording, setSelectedRecording] = useState<RecordingData | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredRecordings = recordings.filter(
    (recording) =>
      recording.cameraName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recording.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className='bg-gray-800 shadow-md'>
        <div className='w-full px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16 max-w-[1920px] mx-auto'>
            <div className='flex items-center -ml-2 sm:-ml-6'>
              <Camera className='w-8 h-8 mr-2 text-indigo-400' />
              <span className='text-xl font-semibold text-indigo-100'>SecureEye Admin</span>
            </div>
            <nav className='hidden md:flex items-center space-x-12'>
              <Link href='/dashboard' className='text-gray-300 hover:text-indigo-100 transition-colors duration-200'>
                Dashboard
              </Link>
              <Link href='/dashboard/cameras' className='text-gray-300 hover:text-indigo-100 transition-colors duration-200'>
                Cameras
              </Link>
              <Link href='/dashboard/recordings' className='text-gray-300 hover:text-indigo-100 transition-colors duration-200'>
                Recordings
              </Link>
            </nav>
            <div className='hidden md:flex items-center'>
              <div className='relative mr-4'>
                <Input
                  type='text'
                  placeholder='Search recordings...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:border-indigo-500 focus:ring-indigo-500'
                />
              </div>
              <Button
                variant='ghost'
                size='icon'
                className='relative text-gray-300 hover:text-indigo-100 transition-colors duration-200 hover:bg-gray-700'
              >
                <Bell className='w-5 h-5' />
                <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 transform translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-full'>
                  3
                </span>
              </Button>
              <UserDropdown />
            </div>
            <div className='md:hidden'>
              <Button
                variant='ghost'
                size='icon'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='text-gray-300 hover:text-indigo-100 transition-colors duration-200 hover:bg-gray-700'
              >
                <Menu className='w-6 h-6' />
              </Button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              <Link href='/dashboard' className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700'>
                Dashboard
              </Link>
              <Link href='/dashboard/cameras' className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700'>
                Cameras
              </Link>
              <Link href='/dashboard/recordings' className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700'>
                Recordings
              </Link>
            </div>
            <div className='pt-4 pb-3 border-t border-gray-700'>
              <div className='flex items-center px-5'>
                <div className='flex-shrink-0'>
                  <img className='h-10 w-10 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8aIS6GEFUY2LNsXHyd2c435FciiYgJKC4Q&s' alt='User' />
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium leading-none text-white'>Pro-Koderz</div>
                  <div className='text-sm font-medium leading-none text-gray-400'>user@example.com</div>
                </div>
                <Button
                  variant='ghost'
                  size='icon'
                  className='ml-auto text-gray-300 hover:text-indigo-100 transition-colors duration-200 hover:bg-gray-700'
                >
                  <Bell className='w-6 h-6' />
                </Button>
              </div>
              <div className='mt-3 px-2 space-y-1'>
                <Button
                  variant='ghost'
                  className='block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'
                >
                  Settings
                </Button>
                <Button
                  variant='ghost'
                  className='block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'
                >
                  Log out
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
      
      <main className="p-6">
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-bold'>Camera Recordings</h1>
        </div>

        <div className='bg-gray-800 rounded-lg overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='bg-gray-700'>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'>Recording ID</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'>Camera Name</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'>Date</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'>Duration</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'>Threat Detected</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'>Actions</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-700'>
                {filteredRecordings.map((recording) => (
                  <tr key={recording.id}>
                    <td className='px-6 py-4 whitespace-nowrap'>{recording.id}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{recording.cameraName}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{recording.date}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{recording.duration}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {recording.threatDetected ? (
                        <span className='px-2 py-1 rounded-full text-xs font-semibold bg-red-500 text-white'>Threat Detected</span>
                      ) : (
                        <span className='px-2 py-1 rounded-full text-xs font-semibold bg-green-500 text-white'>No Threat</span>
                      )}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <Button
                        variant='outline'
                        onClick={() => setSelectedRecording(recording)}
                        className='bg-gray-700 hover:bg-gray-600'
                      >
                        Show Recording
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {selectedRecording && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'>
          <div className='bg-gray-800 rounded-lg p-6 max-w-3xl w-full'>
            <h2 className='text-xl font-bold mb-4'>Recording: {selectedRecording.id}</h2>
            <div className='aspect-w-16 aspect-h-9 mb-4'>
              <video
                controls
                className='w-full h-full rounded-lg'>
                <source
                  src={selectedRecording.videoUrl}
                  type='video/mp4'
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className='grid grid-cols-2 gap-4 mb-4'>
              <div>
                <span className='font-medium text-gray-400'>Camera Name:</span>
                <span className='ml-2'>{selectedRecording.cameraName}</span>
              </div>
              <div>
                <span className='font-medium text-gray-400'>Date:</span>
                <span className='ml-2'>{selectedRecording.date}</span>
              </div>
              <div>
                <span className='font-medium text-gray-400'>Duration:</span>
                <span className='ml-2'>{selectedRecording.duration}</span>
              </div>
              <div>
                <span className='font-medium text-gray-400'>Threat Detected:</span>
                <span className='ml-2'>
                  {selectedRecording.threatDetected ? (
                    <span className='px-2 py-1 rounded-full text-xs font-semibold bg-red-500 text-white'>Yes</span>
                  ) : (
                    <span className='px-2 py-1 rounded-full text-xs font-semibold bg-green-500 text-white'>No</span>
                  )}
                </span>
              </div>
            </div>
            <div className='flex justify-end'>
              <Button onClick={() => setSelectedRecording(null)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='sm'
          className='ml-4 -mr-2 sm:-mr-6 flex items-center text-gray-300 hover:text-indigo-100 transition-colors duration-200 hover:bg-gray-700'
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
          <Settings  className='mr-2 h-4 w-4' />
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