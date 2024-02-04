import React from 'react';

const Awards = () => {
    return (
        <>
            <div className="container">
                <h3 className="mt-5">Awards</h3>
                <div className='row'>
                    <div className="col-md-4 col-12">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <h5 className="card-title">E-commerce Moving</h5>
                                <p>Award By E-cab 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <h5 className="card-title">Best Director in JCI North</h5>
                                <p>2012</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-12'>
                        <h3>Achievements</h3>
                        <div className='card shadow border-0 bg-primary text-white'>
                            <div className='card-body'>
                                <ul>
                                    <li>Champions I-Dare Business Plan Competition 2012 (GIST)</li>
                                    <li>Semi Finalist Global Social Venture Competition 2012( University of California)</li>
                                    <li>Semi Finalist Global Social Entrepreneurship Competition 2012(University of Washington)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default Awards;