import React from 'react';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import SimilarProducts from './components/SimilarProducts';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <ProductPage />
      <SimilarProducts />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;