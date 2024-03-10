'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className="flex flex-col p-2 border rounded-md border-gray-300 m-3">
      <h2 className="text-2xl my-2">Something went wrong!</h2>
      <h3 className="text-xl">Reason: {error.message}</h3>
      <button
        className="bg-black text-white p-1 rounded-md m-auto"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}