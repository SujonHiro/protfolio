import React from 'react';
import Card from '../Card/Card';
import './containsection.css';
import { NavLink } from 'react-router-dom';
import Slide from '../carousel/Slide';
const ContentSection = (props) => {
    return (
        <>
        <Slide/>
        <div className='container mx-auto'>
            <div className='row'>
                <div className='col-md-4 col-lg-4'>
                    <div className='cardSection '>
                        <Card/>
                    </div>
                </div>
                <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12'>
                    <ul  className='list-inline d-flex gap-3 justify-content-start sm:justify-content-center mx-3 mt-5'>
                        <li className='list-inline-item '>
                            <NavLink  
                                className={(navData)=>navData.isActive?'button text-decoration-none' : 'text-decoration-none'}
                                to={'/expriences'} >Expriences
                            </NavLink>
                        </li>
                        <li className='list-inline-item '>
                            <NavLink 
                                className={(navData)=>navData.isActive ? 'button text-decoration-none' : 'text-decoration-none'}
                                to={'/service'}>Services
                            </NavLink>
                        </li>
                        <li className='list-inline-item'>
                            <NavLink 
                                className={(navData)=>navData.isActive ? 'button text-decoration-none' : 'text-decoration-none'}
                                to={'/education'}>Education
                            </NavLink>
                        </li>
                  
                        <li className='list-inline-item'>
                            <NavLink 
                                className={(navData)=>navData.isActive ? 'button text-decoration-none' : 'text-decoration-none'}
                                to={'/awards'}>Honors
                            </NavLink>
                        </li>
                    </ul>
                   <div className='content'>
                        {props.children}
                   </div>
                </div>
            </div>
        </div>   
        </>
    );
};

export default ContentSection;