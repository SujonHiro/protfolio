import React from 'react';
import './Slide.css'
import cover2 from '../../assets/images/2.png'
const Slide = () => {
    return (
        <>
            <div className='section'>
                    <div className='col-12 w-100'>
                        <img src={cover2} className='w-100 d-block' alt="Cover"/>
                    </div>
            </div>
        </>
    );
};

export default Slide;