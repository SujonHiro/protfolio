import React from 'react';
import cardImg from '../../assets/images/cardimg2.jpg'
import { GrFormView } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import './Service.css'
const Service = () => {
    return (
        <div>
            <div className='container sm:ml-5'>
                <div className='row'>
                    <div className="col-md-6 ml-2 ">
                        <div className="card myCard shadow animated fadeInUp">
                            <img className='card-img-top rounded cardImage' src={cardImg} alt="" />
                                <div className="overlay-body">
                                    <div className='text d-flex justify-content-around'>
                                        <a href='#'>Meta Marketing Tips- Facebook </a>
                                        <span ><GrFormView className='viewIcon' size={30}/></span>
                                        <span><FaGithub className='githubIcon'/></span>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-6 ml-2">
                        <div className="card myCard shadow animated fadeInUp">
                            <img className='card-img-top rounded cardImage' src={cardImg} alt="" />
                                <div className="overlay-body">
                                    <div className='text d-flex justify-content-around'>
                                        <a href='#' >Youtube Marketing Tips</a>
                                        <span ><GrFormView className='viewIcon' size={30}/></span>
                                        <span><FaGithub className='githubIcon'/></span>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-6 ml-2">
                        <div className="card myCard shadow animated fadeInUp">
                            <img className='card-img-top rounded cardImage' src={cardImg} alt="" />
                                <div className="overlay-body">
                                    <div className='text d-flex justify-content-around'>
                                        <a href='#'>Google Analytics Power</a>
                                        <span ><GrFormView className='viewIcon' size={30}/></span>
                                        <span><FaGithub className='githubIcon'/></span>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-6 ml-2">
                        <div className="card myCard shadow animated fadeInUp">
                            <img className='card-img-top rounded cardImage' src={cardImg} alt="" />
                                <div className="overlay-body">
                                    <div className='text d-flex justify-content-around'>
                                        <a href='#'>Google Marketing Tips</a>
                                        <span ><GrFormView className='viewIcon' size={30}/></span>
                                        <span><FaGithub className='githubIcon'/></span>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;