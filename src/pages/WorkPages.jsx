import React from 'react';
import Work from '../components/work/Work';
import ContentSection from '../components/ContentSection/ContentSection';
import Navbar from '../components/navbar/Navbar';

const WorkPages = () => {
    return (
        <div>
            <Navbar/>
            <ContentSection>
               <Work/>
            </ContentSection>
        </div>
    );
};

export default WorkPages;