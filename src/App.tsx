/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import CustomCaskets from './pages/CustomCaskets';
import Wholesale from './pages/Wholesale';
import Manufacturing from './pages/Manufacturing';
import Gallery from './pages/Gallery';
import Catalogue from './pages/Catalogue';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="custom-caskets" element={<CustomCaskets />} />
          <Route path="wholesale" element={<Wholesale />} />
          <Route path="manufacturing" element={<Manufacturing />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

