import React from 'react';

const Expirience = () => {
    return (
        <section className="expirience-section">
            <div className="container">
                <div className="row">
                    <h3 className="section-headers-white col-12">Company expirience</h3>
                    <ul className="expirience-container">
                        <li className="expirience-list col-lg-4 col-md-12">
                            <div className="circe-big">
                                <div className="circle-small">
                                    <i className="fa fa-cogs fa-3" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="expirience-content">
                                <p className="numbers">500</p>
                                <p className="meanings">years of web development</p>
                            </div>
                        </li>
                        <li className="expirience-list col-lg-4 col-md-12">
                            <div className="circe-big">
                                <div className="circle-small">
                                    <i className="fa fa-phone fa-3" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="expirience-content">
                                <p className="numbers">25 000</p>
                                <p className="meanings">results of the last winter year</p>
                            </div>
                        </li>
                        <li className="expirience-list col-lg-4 col-md-12">
                            <div className="circe-big">
                                <div className="circle-small">
                                    <i className="fa fa-rocket fa-3" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="expirience-content">
                                <p className="numbers">100 000</p>
                                <p className="meanings">euros of the military budget</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Expirience;