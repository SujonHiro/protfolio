import React from 'react';
import Awards from '../components/Awards/Awards';
import ContentSection from '../components/ContentSection/ContentSection';
import Navbar from '../components/navbar/Navbar';

const AwardPage = () => {
    return (
        <div>         
            <Navbar/>
            <ContentSection>
                <Awards/>
            </ContentSection>
            
        </div>
    );
};

export default AwardPage;