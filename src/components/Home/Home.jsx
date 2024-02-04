import React from 'react';
import Expriences from './../work/Expriences';

const Home = () => {
    return (
        <>
            <div className='container mx-0'>
                <h3 className='mt-5'>Start-Up-Expriences</h3>
                <div className='row '>
                    <div className="col-md-4 col-12 mt-4">
                        <div className='card shadow border-0 bg-primary text-white'>
                            <div className='card-body'>
                                <p>Greennovation Pvt Ltd</p>
                                <span>Position: Director</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mt-4">
                        <div className='card shadow border-0'>
                            <div className='card-body'>
                                <p>Hasan Global Supplying</p>
                                <span>Position: Owner</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mt-4">
                        <div className='card shadow border-0 bg-dark text-white'>
                            <div className='card-body'>
                                <p>ROI Hackers</p>
                                <span>Position: Owner</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mt-4">
                        <div className='card shadow border-0'>
                            <div className='card-body'>
                                <p>Stygen Gift Platform Ltd</p>
                                <span>Position: Director</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mt-4">
                        <div className='card shadow border-0 bg-primary text-white'>
                            <div className='card-body'>
                                <p>SME VAI</p>
                                <span>Position: COO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;