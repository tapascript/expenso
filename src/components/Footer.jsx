import React from 'react'

const Footer = () => {
  return (
    <div className="border-t-2 border-gray-400 my-2">
      <h4 className="text-center">Expenso &copy; {new Date().getFullYear()}</h4>
    </div>
  )
}

export default Footer