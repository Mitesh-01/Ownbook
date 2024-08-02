import React from 'react'
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Books from '../Components/Books';
import Cards from '../Components/Cards';
import Footer from '../Components/Footer';

function Home() {
    return (
        <>
            <div>
                <Navbar />
                <Banner />
                <Books />
                <Cards />
                <Footer />
            </div>
        </>
    )
}

export default Home
