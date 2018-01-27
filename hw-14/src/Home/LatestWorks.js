import React from 'react';

const LatestWorks = () => {
    return (
        <section className="latest-works-section">
            <div className="container">
                <div className="row">
                    <h3 className="section-headers-white col-12">Latest works</h3>
                    <p className="section-titles-text-white col-12">
                        That we can tuck in our children at night and know that they are fed and clothed and safe from harm.
                        Our trials and triumphs became at once unique and universal.
                    </p>
                    <div className="cards col-lg-4 col-md-6 col-sm-12">
                        <img className="work-cards-img img-fluid" src="images/card1.jpg" alt="card-image"/>
                            <div className="cards-content">
                                <div className="author">
                                    <p className="author-name">Joker</p>
                                    <p className="author-position">Art Direction, Web Design</p>
                                </div>
                                <div className="cards-content-likes">
                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                    <span>257</span>
                                </div>
                            </div>
                            <ul className="wrap-icon-card">
                                <li className="icon-card">
                                    <button className="icon-card-like">
                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                    </button>
                                </li>
                                <li className="icon-card">
                                    <button className="icon-card-like">
                                        <i className="fa fa-search-plus" aria-hidden="true"></i>
                                    </button>
                                </li>
                                <li className="icon-card">
                                    <button className="icon-card-like">
                                        <i className="fa fa-link" aria-hidden="true"></i>
                                    </button>
                                </li>
                            </ul>
                    </div>
                    <div className="cards col-lg-4 col-md-6 col-sm-12">
                        <img className="work-cards-img img-fluid" src="images/card2.jpg" alt="card-image"/>
                            <div className="cards-content">
                                <div className="author">
                                    <p className="author-name">Artoo-Detoo</p>
                                    <p className="author-position">Photography, Web Design</p>
                                </div>
                                <div className="cards-content-likes">
                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                    <span>257</span>
                                </div>
                            </div>
                            <ul className="wrap-icon-card">
                                <li className="icon-card">
                                    <button className="icon-card-like">
                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                    </button>
                                </li>
                                <li className="icon-card">
                                    <button className="icon-card-like">
                                        <i className="fa fa-search-plus" aria-hidden="true"></i>
                                    </button>
                                </li>
                                <li className="icon-card">
                                    <button className="icon-card-like">
                                        <i className="fa fa-link" aria-hidden="true"></i>
                                    </button>
                                </li>
                            </ul>
                    </div>
                    <div className="cards col-lg-4 col-md-6 col-sm-12">
                        <img className="work-cards-img img-fluid" src="images/card3.jpg" alt="card-image"/>
                            <div className="cards-content">
                                <div className="author">
                                    <p className="author-name">Hulk</p>
                                    <p className="author-position">Photography, Web Design</p>
                                </div>
                                <div className="cards-content-likes">
                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                    <span>257</span>
                                </div>
                            </div>
                            <ul className="wrap-icon-card">
                                <li className="icon-card">
                                    <button className="icon-card-like">
                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                    </button>
                                </li>
                                <li className="icon-card">
                                    <button className="icon-card-like">
                                        <i className="fa fa-search-plus" aria-hidden="true"></i>
                                    </button>
                                </li>
                                <li className="icon-card">
                                    <button className="icon-card-like">
                                        <i className="fa fa-link" aria-hidden="true"></i>
                                    </button>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestWorks;