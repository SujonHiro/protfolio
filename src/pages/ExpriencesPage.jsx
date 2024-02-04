import React from 'react';

import ContentSection from '../components/ContentSection/ContentSection';
import Navbar from '../components/navbar/Navbar';
import Expriences from '../components/work/Expriences';

const ExpriencesPage = () => {
    return (
        <div>
            <Navbar/>
            <ContentSection>
               <Expriences/>
            </ContentSection>
        </div>
    );
};

export default ExpriencesPage;