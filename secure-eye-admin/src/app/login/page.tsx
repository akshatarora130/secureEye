import React, { useState } from 'react'
import { Camera, Key, AlertCircle } from 'lucide-react'

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      {...props}
    />
  )
}

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <button 
      className={`w-full px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default function AdminLoginComponent() {
  const [passkey, setPasskey] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would validate the passkey here
    if (passkey === 'admin123') {
      // Successful login logic
      console.log('Login successful')
      setError('')
    } else {
      setError('Invalid passkey. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="flex justify-center">
            <Camera className="h-20 w-20 text-blue-500" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            CamSafe Admin
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Enter your admin passkey to access the dashboard
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="relative">
              <label htmlFor="passkey" className="sr-only">
                Passkey
              </label>
              <Input
                id="passkey"
                name="passkey"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Enter admin passkey"
                value={passkey}
                onChange={(e) => setPasskey(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                <Key className="h-5 w-5" />
              </div>
            </div>
          </div>

          {error && (
            <div className="flex items-center text-red-500 text-sm">
              <AlertCircle className="h-5 w-5 mr-2" />
              {error}
            </div>
          )}

          <div>
            <Button type="submit">
              Sign in
            </Button>
          </div>
        </form>
        <div className="text-center text-sm text-gray-400">
          Forgot your passkey? Contact the system administrator.
        </div>
      </div>
    </div>
  )
}