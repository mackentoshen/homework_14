import React from 'react';

const GridContentTop = () => {
    return(
        <section className="grid-content-top">
            <div className="container">
                <h3 className="block-grid-title">Blog grid view</h3>
                <div className="row col-12 ">
                    <ul className="user-list">
                        <li className="user-list-link">
                            <a href="#">
                                <div className="grid-icon">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </div>
                                <span className="link-color grid-text">by Alex Poushkin</span>
                            </a>
                        </li>
                        <li className="user-list-link">
                            <a href="#">
                                <div className="grid-icon">
                                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                                </div>
                                <span className="link-color grid-text">September 31</span>
                            </a>
                        </li>
                        <li className="user-list-link">
                            <a href="#">
                                <div className="grid-icon">
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                </div>
                                <span className="link-color grid-text">12 Comments</span>
                            </a>
                        </li>
                    </ul>
                    <nav aria-label="breadcrumb" role="navigation">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Shortcodes</a></li>
                            <li className="breadcrumb-item"><a href="#">Typography</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Blog</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>  
    );  
};

export default GridContentTop;