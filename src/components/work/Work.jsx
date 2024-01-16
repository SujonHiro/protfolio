import React from 'react';
import { Link } from 'react-router-dom';
import expriences from '../../data/expriences';
const Work = () => {
    const elements = [];
    return (
        <>
           <div className='container'>
            <div className='row'>
                <div className="col-md-12">
                <div className='expriences'>
                        <Link to={"#"} className="text-decoration-none view overlay zoom">
                            {expriences.map((exprience,i) => (
                                 <div key={i} className='card border border-0 shadow mx-3 my-3 p-3 cursor-pointer animated fadeInUp'>
                                 <div className='d-flex justify-content-between'>
                                     <h4 className='text-primary mb-0'>{exprience.company}</h4>
                                     <span className='text-primary text-sm'>{exprience.date}</span>
                                 </div>
                                     <h5 className='text-muted text-sm mt-2'>{exprience.title}</h5>
                                     <ul>
                                         <li className='nav-item'>{exprience.description.line1}</li>
                                         <li className='nav-item'>{exprience.description.line2}</li>
                                        <li className='nav-item'>{exprience.description.line3}</li>
                                        <li className='nav-item'>{exprience.description.line4}</li>
                                        <li className='nav-item'>{exprience.description.line5}</li>
                                    </ul>
                             </div>
                            ))}
                           
                        </Link>
                    </div>
                </div>
            </div>
           </div>
        </>
    );
};

export default Work;