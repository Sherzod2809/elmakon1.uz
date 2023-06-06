
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepagebasic from '../pages/homepage/homepagebasic';
import Product from '../pages/products/product';
import Home1 from '../pages/home1/home1';
export default function app() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepagebasic />} />
        <Route path='/home' element={<Product/>} />
        <Route path='/home1' element={<Home1/>} />








        
    </Routes>
  </BrowserRouter>
  )
}
