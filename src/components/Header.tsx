import React from 'react'
import { ShoppingBag, Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/rradiant-logo.jpg" 
              alt="RRADIANT REFLECTION" 
              className="h-10 w-auto"
            />
            <span className="ml-2 text-xl font-bold text-brand">RRADIANT REFLECTION</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-brand transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-brand transition-colors">Collections</a>
            <a href="#" className="text-gray-700 hover:text-brand transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-brand transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-brand transition-colors">
              <ShoppingBag size={24} />
            </button>
            <button 
              className="md:hidden text-gray-700 hover:text-brand transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-700 hover:text-brand transition-colors py-2">Home</a>
              <a href="#" className="text-gray-700 hover:text-brand transition-colors py-2">Collections</a>
              <a href="#" className="text-gray-700 hover:text-brand transition-colors py-2">About</a>
              <a href="#" className="text-gray-700 hover:text-brand transition-colors py-2">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header