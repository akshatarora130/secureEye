import React, { useState } from 'react'
import { createPortal } from 'react-dom'

interface RecordingData {
  id: string
  cameraId: string
  cameraName: string
  date: string
  duration: string
  threatDetected: boolean
  videoUrl: string
}

const mockRecordings: RecordingData[] = [
  { id: 'REC0001', cameraId: 'CAM0001', cameraName: 'Front Door Camera', date: '2023-05-20', duration: '00:30:00', threatDetected: false, videoUrl: '/placeholder.mp4' },
  { id: 'REC0002', cameraId: 'CAM0002', cameraName: 'Backyard Camera', date: '2023-05-20', duration: '00:45:00', threatDetected: true, videoUrl: '/placeholder.mp4' },
  { id: 'REC0003', cameraId: 'CAM0004', cameraName: 'Side Entrance Camera', date: '2023-05-21', duration: '01:00:00', threatDetected: false, videoUrl: '/placeholder.mp4' },
  { id: 'REC0004', cameraId: 'CAM0001', cameraName: 'Front Door Camera', date: '2023-05-21', duration: '00:15:00', threatDetected: true, videoUrl: '/placeholder.mp4' },
]

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'outline' }> = ({ 
  children, 
  className = '', 
  variant = 'default', 
  ...props 
}) => {
  const baseStyle = 'px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variantStyles = {
    default: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
    outline: 'bg-transparent border border-gray-300 text-gray-300 hover:bg-gray-700 focus:ring-blue-500',
  }
  
  return (
    <button 
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

const Badge: React.FC<{ children: React.ReactNode; variant: 'threat' | 'safe' }> = ({ children, variant }) => {
  const baseStyle = 'px-2 py-1 rounded-full text-xs font-semibold'
  const variantStyles = {
    threat: 'bg-red-500 text-white',
    safe: 'bg-green-500 text-white'
  }
  
  return (
    <span className={`${baseStyle} ${variantStyles[variant]}`}>
      {children}
    </span>
  )
}

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      {...props}
    />
  )
}

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode }> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg p-6 max-w-3xl w-full">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  )
}

export default function RecordingsComponent() {
  const [recordings, setRecordings] = useState<RecordingData[]>(mockRecordings)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRecording, setSelectedRecording] = useState<RecordingData | null>(null)

  const filteredRecordings = recordings.filter(recording =>
    recording.cameraName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recording.cameraId.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Camera Recordings</h1>
        <div className="relative">
          <Input
            type="text"
            placeholder="Search recordings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Recording ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Camera Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Threat Detected</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredRecordings.map((recording) => (
                <tr key={recording.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{recording.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{recording.cameraName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{recording.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{recording.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {recording.threatDetected ? (
                      <Badge variant="threat">Threat Detected</Badge>
                    ) : (
                      <Badge variant="safe">No Threat</Badge>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button variant="outline" onClick={() => setSelectedRecording(recording)}>
                      Show Recording
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={!!selectedRecording} onClose={() => setSelectedRecording(null)}>
        {selectedRecording && (
          <div>
            <h2 className="text-xl font-bold mb-4">Recording: {selectedRecording.id}</h2>
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <video controls className="w-full h-full rounded-lg">
                <source src={selectedRecording.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <span className="font-medium text-gray-400">Camera Name:</span>
                <span className="ml-2">{selectedRecording.cameraName}</span>
              </div>
              <div>
                <span className="font-medium text-gray-400">Date:</span>
                <span className="ml-2">{selectedRecording.date}</span>
              </div>
              <div>
                <span className="font-medium text-gray-400">Duration:</span>
                <span className="ml-2">{selectedRecording.duration}</span>
              </div>
              <div>
                <span className="font-medium text-gray-400">Threat Detected:</span>
                <span className="ml-2">
                  {selectedRecording.threatDetected ? (
                    <Badge variant="threat">Yes</Badge>
                  ) : (
                    <Badge variant="safe">No</Badge>
                  )}
                </span>
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={() => setSelectedRecording(null)}>
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}