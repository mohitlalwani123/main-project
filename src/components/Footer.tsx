import React from 'react'
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/rradiant-logo.jpg" 
                alt="RRADIANT REFLECTION" 
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-brand">RRADIANT REFLECTION</span>
            </div>
            <p className="text-gray-400 mb-6">
              Crafting timeless elegance with premium jewelry that reflects your unique radiance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Collections</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Earrings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Necklaces</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bracelets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rings</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <MapPin size={18} className="mr-3" />
                <span>123 Jewelry Lane, City, State 12345</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={18} className="mr-3" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail size={18} className="mr-3" />
                <span>info@rradiantreflection.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 RRADIANT REFLECTION. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer