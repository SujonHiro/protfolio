import React from 'react';
import ContentSection from '../components/ContentSection/ContentSection';
import Navbar from './../components/navbar/Navbar';
import Service from '../components/Service/Service';

const ServicePage = () => {
    return (
        <div>
            <Navbar/>
            <ContentSection>
                <Service/>
            </ContentSection>
        </div>
    );
};

export default ServicePage;