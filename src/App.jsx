import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Components/NavigationBar/Navigation';
import HeroSection from './Components/Homepage/HeroSection';
function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Navigation />
          <Routes>
              <Route path='/' element={<HeroSection/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
