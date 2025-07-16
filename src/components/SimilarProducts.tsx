import React from 'react';
import { Star, ShoppingCart, Eye } from 'lucide-react';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Northern Light",
      price: "2€/G",
      bulkPrice: "10G = 20€",
      image: "https://cbdpascher13.fr/wp-content/uploads/2025/06/northern-light-3.png",
      rating: 4.8,
      reviews: 156,
      badge: "Populaire",
      badgeColor: "bg-[#08F06C] text-black"
    },
    {
      id: 2,
      name: "Le Frozen",
      price: "2,5€/G",
      bulkPrice: "10G = 25€",
      image: "https://cbdpascher13.fr/wp-content/uploads/2025/06/le-frozen.png",
      rating: 4.9,
      reviews: 89,
      badge: "Premium",
      badgeColor: "bg-purple-600"
    },
    {
      id: 3,
      name: "Mimosa Cake",
      price: "2€/G",
      bulkPrice: "10G = 20€",
      image: "https://cbdpascher13.fr/wp-content/uploads/2025/06/mimosa-cake.png",
      rating: 4.5,
      reviews: 124,
      badge: "Nouveau",
      badgeColor: "bg-blue-600"
    },
    {
      id: 4,
      name: "OG Kush",
      price: "2,2€/G",
      bulkPrice: "10G = 22€",
      image: "https://cbdpascher13.fr/wp-content/uploads/2025/06/northern-light-3.png",
      rating: 4.7,
      reviews: 98,
      badge: "Top Vente",
      badgeColor: "bg-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08F06C]/5 via-transparent to-[#08F06C]/5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#08F06C] to-[#08F06C]/70 text-transparent bg-clip-text mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
Vous pouvez également aimer
            </h2>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-white/20 hover:border-[#08F06C]/50 transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 lg:hover:-translate-y-4 hover:shadow-2xl hover:shadow-[#08F06C]/25"
            >
              {/* Image Container */}
              <div className="relative h-32 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Badge positioned at bottom right of image */}
                <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-10">
                  <span className={`${product.badgeColor} px-2 py-1 sm:px-3 rounded-full text-xs font-bold shadow-lg`}>
                    {product.badge}
                  </span>
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2 sm:space-x-3">
                  <button className="bg-white/20 backdrop-blur-sm text-white p-1.5 sm:p-2 lg:p-3 rounded-full hover:bg-white/30 transition-colors duration-200 border border-white/30">
                    <Eye size={14} className="sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5" />
                  </button>
                  <button className="bg-[#08F06C] text-black p-1.5 sm:p-2 lg:p-3 rounded-full hover:bg-[#08F06C]/90 transition-colors duration-200 shadow-lg">
                    <ShoppingCart size={14} className="sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-2 sm:p-4 lg:p-6 xl:p-8">
                <h3 className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#08F06C] transition-colors duration-300 line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-2 sm:mb-3 lg:mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={`sm:w-[14px] sm:h-[14px] lg:w-4 lg:h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-500'}`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-300 ml-1 sm:ml-2 text-xs">({product.reviews} avis)</span>
                </div>

                {/* Pricing */}
                <div className="space-y-1 mb-2 sm:mb-4 lg:mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-xs sm:text-sm lg:text-base">Prix unitaire:</span>
                    <span className="text-base sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#08F06C]">{product.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">Prix dégressif:</span>
                    <span className="text-xs sm:text-sm lg:text-base xl:text-lg font-semibold text-[#08F06C]/80">{product.bulkPrice}</span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-[#08F06C] hover:bg-[#08F06C]/90 text-black py-2 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold text-xs sm:text-sm lg:text-base xl:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#08F06C]/25">
                  Ajouter au Panier
                </button>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-[#08F06C]/0 via-[#08F06C]/0 to-[#08F06C]/0 group-hover:from-[#08F06C]/10 group-hover:via-transparent group-hover:to-[#08F06C]/5 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;