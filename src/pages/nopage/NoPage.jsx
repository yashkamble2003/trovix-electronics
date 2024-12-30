import React from 'react'

function NoPage() {
  return (
    <div className="flex items-center justify-center min-h-screen text-center text-white bg-blue-600">
      <div className="space-y-6">
        <h1 className="text-6xl font-bold">Oops!</h1>
        <p className="text-xl">The page you're looking for doesn't exist.</p>
        <div className="space-x-4">
          <a
            href="/"
            className="inline-block px-6 py-3 text-lg font-semibold text-blue-600 transition duration-300 bg-white rounded-lg hover:bg-blue-100"
          >
            Go Home
          </a>
          <a
            href="mailto:support@example.com"
            className="inline-block px-6 py-3 text-lg font-semibold text-blue-600 transition duration-300 bg-white rounded-lg hover:bg-blue-100"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}

export default NoPage
