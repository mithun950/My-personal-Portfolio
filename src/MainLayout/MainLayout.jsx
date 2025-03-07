import React from 'react';
import Navbar from '../Components/Navbar';
import Bot from '../Components/Bot';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Hireme from '../Components/Hireme';
import Project from '../Components/Project';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Education from '../Components/Education';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Bot></Bot>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Project></Project>
            <Hireme></Hireme>
             <Education></Education>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;