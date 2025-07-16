import React, { useState } from 'react';
import { Star, Heart, Share2, ShoppingCart, Plus, Minus, Shield, Truck, RotateCcw, Award, Leaf, Zap, Phone, Gift } from 'lucide-react';
import SimilarProducts from './SimilarProducts';

const ProductPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState('2G');
  const [isWishlisted, setIsWishlisted] = useState(false);

  const productImages = [
    'https://cbdpascher13.fr/wp-content/uploads/2025/03/frozen-resine-1.png',
    'https://cbdpascher13.fr/wp-content/uploads/2025/03/frozen-resine.png',
    'https://cbdpascher13.fr/wp-content/uploads/2025/03/frozen-resine-2.png'
  ];

  const weightOptions = [
    { 
      weight: '2G', 
      price: 8, 
      originalPrice: 20, 
      label: 'FAUT BIEN GOÛTER',
      pricePerGram: '4€/g',
      popular: false
    },
    { 
      weight: '5G', 
      price: 18, 
      originalPrice: 50, 
      label: 'LA CONNECTION',
      pricePerGram: '3,6€/g',
      popular: true
    },
    { 
      weight: '10G', 
      price: 25, 
      originalPrice: 100, 
      label: 'ON RENTABILISE',
      pricePerGram: '2,5€/g',
      popular: false
    },
    { 
      weight: '25G', 
      price: 55, 
      originalPrice: 250, 
      label: 'AFFAIRE EN OR',
      pricePerGram: '2,2€/g',
      popular: false
    }
  ];

  const currentOption = weightOptions.find(option => option.weight === selectedWeight) || weightOptions[0];

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb avec style amélioré */}
        <nav className="flex items-center space-x-3 text-sm text-gray-400 mb-6">
          <a href="#" className="hover:text-[#08F06C] transition-all duration-300 hover:scale-105">Accueil</a>
          <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
          <a href="#" className="hover:text-[#08F06C] transition-all duration-300 hover:scale-105">Résines CBD</a>
          <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
          <span className="text-[#08F06C] font-medium">Le Frozen</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Section Images avec effets premium */}
          <div className="space-y-6">
            {/* Image principale avec effets */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#08F06C]/20 via-transparent to-[#08F06C]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden aspect-square border border-gray-700/50 shadow-2xl max-h-[500px]">
                <img
                  src={productImages[selectedImage]}
                  alt="Le Frozen CBD"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Actions flottantes */}
                <div className="absolute top-6 right-6 flex flex-col space-y-3">
                  <button
                    onClick={toggleWishlist}
                    className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 transform hover:scale-110 ${
                      isWishlisted 
                        ? 'bg-red-500/90 text-white shadow-lg shadow-red-500/25' 
                        : 'bg-black/40 text-white hover:bg-red-500/90 hover:shadow-lg hover:shadow-red-500/25'
                    }`}
                  >
                    <Heart size={20} className={isWishlisted ? 'fill-current' : ''} />
                  </button>
                  <button className="p-3 rounded-full bg-black/40 text-white hover:bg-[#08F06C]/90 backdrop-blur-md transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-[#08F06C]/25">
                    <Share2 size={20} />
                  </button>
                </div>

                {/* Badge qualité */}
                <div className="absolute bottom-6 left-6">
                  <div className="bg-[#08F06C]/90 backdrop-blur-md text-black px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                    <Award size={16} />
                    <span>Premium Quality</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnails avec effets */}
            <div className="grid grid-cols-4 gap-3">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative group aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-300 transform hover:scale-105 ${
                    selectedImage === index 
                      ? 'border-[#08F06C] shadow-lg shadow-[#08F06C]/25' 
                      : 'border-gray-600/50 hover:border-gray-400'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Vue ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  {selectedImage === index && (
                    <div className="absolute inset-0 bg-[#08F06C]/20"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Section Informations avec design premium */}
          <div className="space-y-6">
            {/* Rating avec animation */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                {[...Array(4)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
                <Star size={20} className="fill-yellow-400/50 text-yellow-400" />
              </div>
              <span className="text-gray-300 text-sm bg-gray-800/50 px-3 py-1 rounded-full">11 avis</span>
            </div>

            {/* Titre avec effet */}
            <div className="space-y-3">
              <h1 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white leading-tight">
                LE FROZEN
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-[#08F06C] to-transparent rounded-full"></div>
            </div>

            {/* Prix avec animation */}
            <div className="flex items-center space-x-6">
              <span className="text-2xl text-[#08F06C] line-through opacity-75 animate-pulse">
                {currentOption.originalPrice}€
              </span>
              <span className="text-4xl font-black text-white">
                {currentOption.price}€
              </span>
            </div>

            {/* Description premium */}
            <div className="space-y-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-[#08F06C] mb-3">Fraîcheur Givrée & Détente Assurée</h3>
              
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex items-start space-x-3">
                  <Leaf className="w-5 h-5 text-[#08F06C] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#08F06C] font-semibold">CBD 20%</span> → Calme profond + Esprit clair – Tensions <span className="italic">(sans THC)</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-[#08F06C] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#08F06C] font-semibold">Arômes</span> : Menthe glaciale, pin boisé, touche citronnée 🌿
                  </div>
                </div>
              </div>
              
              <button className="text-[#08F06C] hover:text-[#08F06C]/80 text-sm underline transition-colors duration-300">
                Lire la suite
              </button>
            </div>

            {/* Sélection de poids avec design premium */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">Choisissez votre format</h3>
              <div className="grid grid-cols-2 gap-4">
                {weightOptions.map((option) => (
                  <button
                    key={option.weight}
                    onClick={() => setSelectedWeight(option.weight)}
                    className={`relative p-4 rounded-2xl border-2 transition-all duration-300 text-left transform hover:scale-105 ${
                      selectedWeight === option.weight
                        ? 'border-[#08F06C] bg-gradient-to-br from-[#08F06C]/20 to-[#08F06C]/5 shadow-lg shadow-[#08F06C]/25'
                        : option.label === 'AFFAIRE EN OR' 
                          ? 'border-amber-500/30 bg-gradient-to-br from-amber-900/20 via-gray-800/50 to-gray-900/50 hover:border-amber-400/60 hover:shadow-lg hover:shadow-amber-500/10'
                          : 'border-gray-600/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:border-gray-400'
                    }`}
                  >
                    {option.popular && (
                      <div className="absolute -top-3 left-4 bg-[#08F06C] text-black px-3 py-1 rounded-full text-xs font-bold">
                        POPULAIRE
                      </div>
                    )}
                    
                    <div className="space-y-1">
                      <div className={`text-xs font-medium ${
                        option.label === 'AFFAIRE EN OR' ? 'text-amber-400' : 'text-gray-400'
                      }`}>
                        {option.label}
                      </div>
                      <div className="font-bold text-xl text-white">{option.weight}</div>
                      <div className={`text-sm font-medium ${
                        option.label === 'AFFAIRE EN OR' ? 'text-amber-300' : 'text-[#08F06C]'
                      }`}>
                        {option.pricePerGram}
                      </div>
                    </div>
                    
                    {selectedWeight === option.weight && (
                      <div className="absolute top-3 right-3 w-3 h-3 bg-[#08F06C] rounded-full animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Bouton d'achat premium */}
            <button className="w-full bg-gradient-to-r from-[#08F06C] to-[#06D85A] hover:from-[#06D85A] hover:to-[#08F06C] text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[#08F06C]/30 flex items-center justify-center space-x-3">
              <ShoppingCart size={20} />
              <span>AJOUTER AU PANIER - {currentOption.price}€</span>
            </button>

            {/* Badges de confiance avec animations */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="text-center p-3 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-[#08F06C]/50 transition-all duration-300 group">
                <Shield className="w-6 h-6 text-[#08F06C] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm text-gray-300 font-medium">Paiement Sécurisé</span>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-[#08F06C]/50 transition-all duration-300 group">
                <Truck className="w-6 h-6 text-[#08F06C] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm text-gray-300 font-medium">Livraison 24h</span>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-[#08F06C]/50 transition-all duration-300 group">
                <RotateCcw className="w-6 h-6 text-[#08F06C] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm text-gray-300 font-medium">Retour 30j</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Avis avec design premium */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white mb-4">
              Avis Clients
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#08F06C] to-transparent rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                name: "Marie D.", 
                rating: 5, 
                comment: "Excellente qualité, effet très relaxant. L'arôme de menthe glaciale est vraiment agréable !", 
                date: "Il y a 2 jours",
                verified: true
              },
              { 
                name: "Pierre L.", 
                rating: 5, 
                comment: "Livraison rapide et produit conforme. Le taux de CBD est parfait pour la détente.", 
                date: "Il y a 1 semaine",
                verified: true
              },
              { 
                name: "Sophie M.", 
                rating: 4, 
                comment: "Bon produit, arômes agréables. Parfait pour se détendre le soir après le travail.", 
                date: "Il y a 2 semaines",
                verified: true
              }
            ].map((review, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-[#08F06C]/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#08F06C]/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#08F06C] to-[#06D85A] rounded-full flex items-center justify-center text-black font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <span className="font-semibold text-white">{review.name}</span>
                      {review.verified && (
                        <div className="text-xs bg-[#08F06C] text-black px-2 py-1 rounded-full mt-1 inline-block">
                          Achat vérifié
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed italic">"{review.comment}"</p>
                <span className="text-gray-500 text-xs">{review.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bloc d'informations service client */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Conseiller disponible */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 text-center hover:border-[#08F06C]/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-[#08F06C]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#08F06C]/30 transition-all duration-300">
                <Phone className="w-8 h-8 text-[#08F06C]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Conseiller disponible</h3>
              <a 
                href="tel:0665354964" 
                className="text-lg text-gray-300 hover:text-[#08F06C] transition-colors duration-300 font-medium"
              >
                06 65 35 49 64
              </a>
            </div>

            {/* Commande traitée */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 text-center hover:border-[#08F06C]/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-[#08F06C]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#08F06C]/30 transition-all duration-300">
                <Truck className="w-8 h-8 text-[#08F06C]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Commande traitée sous 24h</h3>
              <p className="text-lg text-gray-300 font-medium">Livrée sous 3 jours ouvrés</p>
            </div>

            {/* Offre spéciale */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 text-center hover:border-[#08F06C]/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-[#08F06C]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#08F06C]/30 transition-all duration-300">
                <Gift className="w-8 h-8 text-[#08F06C]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">10g de small bud offerts</h3>
              <p className="text-lg text-gray-300 font-medium">dès 69€ d'achats</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;