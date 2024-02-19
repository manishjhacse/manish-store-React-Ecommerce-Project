import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center ">
    <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="text-lg mb-2">The page you are looking for does not exist.</p>
    <p className="text-lg">Please check the URL or navigate back to the homepage.</p>
    <Link className='text-green-900 font-bold' to={"/"}>Go to Home</Link>
  </div>
  )
}
