import React from 'react'
import { Heart, ShoppingCart } from 'lucide-react'

const products = [
  {
    id: 1,
    name: "Diamond Elegance Earrings",
    price: "$299",
    image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Earrings"
  },
  {
    id: 2,
    name: "Rose Gold Pendant Necklace",
    price: "$459",
    image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Necklaces"
  },
  {
    id: 3,
    name: "Crystal Charm Bracelet",
    price: "$189",
    image: "https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Bracelets"
  },
  {
    id: 4,
    name: "Sapphire Statement Ring",
    price: "$699",
    image: "https://images.pexels.com/photos/1191537/pexels-photo-1191537.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Rings"
  },
  {
    id: 5,
    name: "Pearl Drop Earrings",
    price: "$229",
    image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Earrings"
  },
  {
    id: 6,
    name: "Gold Chain Necklace",
    price: "$389",
    image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Necklaces"
  }
]

const ProductGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked pieces that embody timeless elegance and modern sophistication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                    <Heart size={20} className="text-gray-600 hover:text-brand" />
                  </button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-brand font-medium">{product.category}</span>
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{product.name}</h3>
                
                <button className="w-full bg-brand hover:bg-brand-hover text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2">
                  <ShoppingCart size={20} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid