import React from 'react';

const PortfolioSingle = () => {
    return(
        <section className="portfolio-single container">
            <div className="row">
                <div className="col-lg-9 col-md-12 col-sm-12 portfolio-carousel">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner full-height">
                            <div className="carousel-item active mh-100">
                                <img className="d-block img-fluid w-100" src="images/carousel1.jpg" alt="First slide"/>
                            </div>
                            <div className="carousel-item mh-100">
                                <img className="d-block img-fluid w-100" src="images/carousel2.jpg" alt="Second slide"/>
                            </div>
                            <div className="carousel-item mh-100">
                                <img className="d-block img-fluid w-100" src="images/carousel3.jpg" alt="Third slide"/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                    <div className="container">
                        <div className="row">
                            <ul className="portfolio-social-list col-12">
                                <li className="portfolio-social-icon">
                                    <a href="#">
                                        <i className="fa fa-facebook-official" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="portfolio-social-icon">
                                    <a href="#">
                                        <i className="fa fa-twitter-square" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="portfolio-social-icon">
                                    <a href="#">
                                        <i className="fa fa-envelope-square" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="portfolio-social-icon">
                                    <a href="#">
                                        <i className="fa fa-pinterest-square" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="portfolio-social-icon">
                                    <a href="#">
                                        <i className="fa fa-plus-square" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="portfolio-social-icon">
                                    <a href="#">
                                        <span className="icon-counter">257</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="col-lg-3 col-md-12 col-sm-12">
                    <div className="slide-btns">
                        <button className="slide-portfolio-btn">
                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                        </button>
                        <button className="slide-portfolio-btn">
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="portfolio-likes">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        <span>257</span>
                    </div>
                    <a href="#" className="portfolio-category">Art Direction, Web Design</a>
                    <p className="portfolio-description-text">
                        Gingerbread candy chupa chups topping. Halvah cake croissant jelly beans. Unerdwear.com
                        brownie lollipop sesame snaps bear claw sweet roll sweet I love soufflé.
                    </p>
                    <p className="portfolio-description-text">
                        Caramels powder gummies pudding danish sesame snaps. Sweet roll caramels fruitcake bonbon unerdwear.
                    </p>
                    <div className="work-description">
                        <p>Work description</p>
                        <ul className="work-container">
                            <li className="work-list">
                                <i className="fa fa-check-square-o" aria-hidden="true"></i>
                                <span>Brownie ice cream carrot</span>
                            </li>
                            <li className="work-list">
                                <i className="fa fa-check-square-o" aria-hidden="true"></i>
                                <span>Carrot cake apple pie</span>
                            </li>
                            <li className="work-list">
                                <i className="fa fa-check-square-o" aria-hidden="true"></i>
                                <span>Love applicake I love</span>
                            </li>
                            <li className="work-list">
                                <i className="fa fa-check-square-o" aria-hidden="true"></i>
                                <span>Chocolate bar pudding</span>
                            </li>
                        </ul>
                    </div>
                    <button className="work-descrition-button" type="submit">Buy now</button>
                </div>

            </div>


        </section>
    );
};

export default PortfolioSingle;