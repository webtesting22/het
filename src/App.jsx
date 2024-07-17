import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Components/NavigationBar/Navigation';
import HeroSection from './Components/Homepage/HeroSection';
import Footer from './Components/Footer/Footer';
function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Navigation />
          <Routes>
            <Route path='/' element={<HeroSection />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
