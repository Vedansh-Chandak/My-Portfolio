import { useState } from 'react';

import Home from './Components/HomeOutlet';
import ContactOutlet from './Components/ContactOutlet';
import Landing from './Components/Landing';
import { BrowserRouter,Route, Routes } from 'react-router';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AboutOutlet from './Components/AboutOutlet';
import  CoadingSkills from './Components/CoadingSkills.jsx';
import ProffesionalSkills from './Components/ProffesionalSkills';
import Gallery from './Components/Gallery.jsx'
import Cv from './Components/Cv.jsx';
function App() {
  return (
    <><BrowserRouter>
<Navbar/>
  <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/ContactOutlet' element={<ContactOutlet/>}/>
    <Route path='/AboutOutlet' element={<AboutOutlet/>}/>
    <Route path='/CoadingSkills' element={<CoadingSkills/>}/>
    <Route path='/Gallery' element={<Gallery/>}/>
    <Route path='/Cv' element={<Cv/>}/>
  </Routes>
    </BrowserRouter>
 <Footer/>
    </>
  );
}

export default App;