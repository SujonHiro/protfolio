import React from 'react';
import {Link } from 'react-router-dom';
import educationList from '../../data/education';
const Education = () => {
    return (
        <>
            <div className='container'>
            <div className='row'>
                <div className="col-md-12">
                <div className='education'>
                    {educationList.map((education, i) => (
                         <Link to={"#"}  key={i.toString()} className="text-decoration-none view overlay zoom">
                         <div   className='card border border-0 shadow  my-3 p-3 cursor-pointer animated fadeInUp'>
                             <img src={education.image} className='w-100 h-25 card-img-top rounded' alt="..."/>
                                <div className='d-flex justify-content-between mt-2'>
                                    <h4 className='text-primary mb-0'>{education.name}</h4>
                                    <span className='text-primary text-sm'> {education.date}</span>
                                </div>
                                 <div>
                                 <h5 className='text-muted text-sm mt-2'>{education.department}</h5>
                                 <p>{education.description}</p>
                                 </div>
                                 
                         </div>
                     </Link>
                    ))}
                    </div>
                </div>
            </div>
           </div>
        </>
    );
};

export default Education;