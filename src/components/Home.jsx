import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-[350px]">
      <div className="w-[90%] max-w-md text-center bg-white p-6 rounded-lg shadow-md ">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
          Welcome to PopX
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <Link to="signup"><button className="w-full bg-purple-600 text-white py-3 px-3 rounded-lg font-semibold hover:bg-purple-700 transition">
          Create Account
         </button>
        </Link>
        <Link to="signin"><button className="w-full bg-purple-100 text-purple-800 py-3 rounded-lg font-semibold mt-5 hover:bg-purple-200 transition">
          Already Registered? Login
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
