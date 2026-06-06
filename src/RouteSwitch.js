// Author: Jeremy St Pierre #301540695 for COMP229 

import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const RouteSwitch = () => {
    return (
        <Routes>
            {/* 
                This component uses Reacts BrowserRouter and Routes to render components to the page based on the URL path
            */}
            <Route path='/' element={<Home />} />
            <Route path='/AboutMe' element={<AboutMe />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Contact' element={<Contact />} />
        </Routes>
    );
}

export default RouteSwitch;