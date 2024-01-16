import React from 'react';

import ContentSection from '../components/ContentSection/ContentSection';
import Work from '../components/work/Work';


const Home = () => {
    return (
        <div>
            <Navbar/>
            <ContentSection>
                <Work/>
            </ContentSection>
        </div>
    );
};

export default Home;