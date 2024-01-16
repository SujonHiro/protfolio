import React from 'react';
import './Slide.css'
import cover2 from '../../assets/images/2.png'
const Slide = () => {
    return (
        <>
            <div className='section'>
                    <div className='col-12 w-100'>
                        <img src={cover2} className='w-100' alt=""/>
                        {/* {<div className='container d-flex justify-content-center'>
                            <div className='heroSectionLeft'>
                                  
                                     <h4 className='text-white'>WELCOME TO MY PORTFOLIO</h4>
                                   
                            </div>
                            <div className='heroSectionRight '>
                                <p>hello</p>
                            </div>
                        </div>} */}
                    </div>
            </div>
               

        </>
    );
};

export default Slide;