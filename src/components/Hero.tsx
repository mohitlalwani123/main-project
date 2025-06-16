import React from 'react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Radiant
              <span className="text-brand block">Elegance</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover our exquisite collection of premium jewelry. Each piece is carefully crafted to reflect your unique style and radiant personality.
            </p>
            <button className="bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105">
              Explore Collection
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Premium Jewelry Collection" 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero