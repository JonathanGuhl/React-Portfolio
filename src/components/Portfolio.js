import React, { useState } from 'react';
import Navigationbar from './Navbar';
import Footer from './Footer';
import AboutMe from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Projects from './pages/Projects';

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
        return <Resume />
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className=''>
            <Navigationbar page={currentPage} handlePageChange={handlePageChange} />
            <Footer />
            {renderPage()}

        </div>
    )
}