import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import About from './pages/About';
import ServicePage from './pages/ServicePage';
import ProductPage from './pages/ProductPage';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - var(--header-height) - 400px)', paddingTop: 'var(--header-height)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/products/:slug" element={<ProductPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
