import React from 'react';
import Education from '../components/Education/Education';
import ContentSection from '../components/ContentSection/ContentSection';
import Navbar from '../components/navbar/Navbar';


const EducationPage = () => {
    return (
        <div>
            <Navbar/>
            <ContentSection>
               <Education/>
            </ContentSection>
        </div>
    );
};

export default EducationPage;