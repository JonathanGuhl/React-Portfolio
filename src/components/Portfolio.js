import React, { useState } from 'react';
import Navigationbar from './Navbar';
import Footer from './Footer';
import AboutMe from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Resume';
import Projects from './pages/Projects';
import '../styles/style.css'

export default function Portfolio() {
    
    const [ currentPage, setCurrentPage ] = useState("AboutMe")

    const renderPage = () => {
        if(currentPage === "AboutMe"){
            return <AboutMe />
        }
        if(currentPage === "Projects"){
            return <Projects />
        }
        if(currentPage === "Contact"){
            return <Contact />
        }
        return <Skills />
    }

    const handlePageChange = (page) => setCurrentPage(page);

    const background = {
        background: "#5C0099",
    }

    return (
        <div className="vh-100" style={background}>
            <Navigationbar page={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    )
}