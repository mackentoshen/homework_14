import React from 'react';

const Welcome = () => {
    return (
        <section className="welcome-section">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active mh-100">
                        <img className="d-block img-fluid w-100" src="images/slide1.jpeg" alt="First slide"/>
                            <div className="jumbotron container">
                                <h2 className="jumbotron-title"><span className="cyan-text">Creating a unique look.</span></h2>
                                <h2 className="jumbotron-title">Never been easier.</h2>
                                <div className="jumbotron-btn">
                                    <button className="full-btn" type="submit" value="sea features">sea features</button>
                                    <button className="transp-btn" type="submit" value="purchase now">purchase now</button>
                                </div>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid w-100" src="images/slide2.jpeg" alt="Second slide"/>
                            <div className="jumbotron container">
                                <h2 className="jumbotron-title"><span className="cyan-text">Creating a unique look.</span></h2>
                                <h2 className="jumbotron-title">Never been easier.</h2>
                                <div className="jumbotron-btn">
                                    <button className="full-btn" type="submit" value="sea features">sea features</button>
                                    <button className="transp-btn" type="submit" value="purchase now">purchase now</button>
                                </div>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid w-100" src="images/slide3.jpg" alt="Third slide"/>
                            <div className="jumbotron container">
                                <h2 className="jumbotron-title"><span className="cyan-text">Creating a unique look.</span></h2>
                                <h2 className="jumbotron-title">Never been easier.</h2>
                                <div className="jumbotron-btn">
                                    <button className="full-btn" type="submit" value="sea features">sea features</button>
                                    <button className="transp-btn" type="submit" value="purchase now">purchase now</button>
                                </div>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid w-100" src="images/slide4.jpg" alt="Fourth slide"/>
                            <div className="jumbotron container">
                                <h2 className="jumbotron-title"><span className="cyan-text">Creating a unique look.</span></h2>
                                <h2 className="jumbotron-title">Never been easier.</h2>
                                <div className="jumbotron-btn">
                                    <button className="full-btn" type="submit" value="sea features">sea features</button>
                                    <button className="transp-btn" type="submit" value="purchase now">purchase now</button>
                                </div>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid w-100" src="images/slide5.jpg" alt="Fifth slide"/>
                            <div className="jumbotron container">
                                <h2 className="jumbotron-title"><span className="cyan-text">Creating a unique look.</span></h2>
                                <h2 className="jumbotron-title">Never been easier.</h2>
                                <div className="jumbotron-btn">
                                    <button className="full-btn" type="submit" value="sea features">sea features</button>
                                    <button className="transp-btn" type="submit" value="purchase now">purchase now</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Welcome;