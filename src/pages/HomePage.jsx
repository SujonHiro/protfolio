import React from 'react';
import ContentSection from '../components/ContentSection/ContentSection';
import Navbar from '../components/navbar/Navbar';
import Home from './../components/Home/Home';

const HomePage = () => {
    return (
        <div>
                <Navbar/>
                <ContentSection>
                    <Home/>
                </ContentSection>
        </div>
    );
};

export default HomePage;