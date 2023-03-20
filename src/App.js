import React from 'react';
import {About, Footer, Skills, Testimonial, Header, Work}  from './container';
import {Navbar} from './components';
import './App.scss';
import Certifications from './container/Certifications/Certifications';

const App = () => {
  return (
    <div className="app">
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Certifications/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default App