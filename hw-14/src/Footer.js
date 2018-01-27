import React from 'react';

const Footer = () => {
    return (

        <footer className="main-footer">
            <div className="container">
                <ul className="footer-top row">
                    <li className="footer-top-content col-lg-3 col-md-6 col-sm-12">
                        <h3 className="footer-titles">Get in touch</h3>
                        <ul className="footer-top-menu contact-area">
                            <li>
                                <span className="cyan-text"><i className="fa fa-flag" aria-hidden="true"></i></span>
                                <span className="white-text">Address:</span>
                                <span className="grey-text">321 Street Name, United Kingdom, London</span>
                            </li>
                            <li>
                                <span className="cyan-text"><i className="fa fa-phone" aria-hidden="true"></i></span>
                                <span className="white-text">Phone:</span>
                                <span className="grey-text">+7 998 71 150 30 20</span>
                            </li>
                            <li>
                                <span className="cyan-text"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                <span className="white-text">Email:</span>
                                <span className="grey-text">info@ambertheme.com</span>
                            </li>
                            <li>
                                {/*<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4851.902163216872!2d12.455041488757992!3d41.90373810615965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1510952386234" width="210" height="150" frameborder="0" style="border:0" allowfullscreen></iframe>*/}
                            </li>
                        </ul>
                    </li>
                    <li className="footer-top-content col-lg-3 col-md-6 col-sm-12">
                        <h3 className="footer-titles">Latest tweets</h3>
                        <ul className="footer-top-menu tweets-area">
                            <li>
                        <span className="cyan-text">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </span>
                                <span className="white-text">CMS Masters And Their Best Web Design Tools</span>
                                <span className="cyan-text">#bestwebdesigntools #webdesign</span>
                                <span className="grey-text">— about 12 min ago</span>
                            </li>
                            <li>
                        <span className="cyan-text">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </span>
                                <span className="white-text">
                            WOOCOMMERCE functionality added!!! See Industrial theme become even powerful! -
                        </span>
                                <span className="cyan-text">bit.ly/industrial-wp</span>
                                <span className="grey-text">— about 47 days ago</span>
                            </li>
                            <li>
                        <span className="cyan-text">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </span>
                                <span className="white-text">CMS Masters And Their Best Web Design Tools</span>
                                <span className="cyan-text">#bestwebdesigntools #webdesign</span>
                            </li>
                        </ul>
                    </li>
                    <li className="footer-top-content col-lg-3 col-md-6 col-sm-12">
                        <h3 className="footer-titles">Follow us</h3>
                        <ul className="footer-top-menu social-area">
                            <li>
                                <a href="#">
                                    <div className="footer-social-icon facebook">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </div>
                                    <div className="icon-meaning">
                                        <span className="white-text col-10">Like us on Facebook</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="footer-social-icon twitter">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </div>
                                    <div className="icon-meaning">
                                        <span className="white-text col-10">Follow us on Twitter</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="footer-social-icon youtube">
                                        <i className="fa fa-youtube" aria-hidden="true"></i>
                                    </div>
                                    <div className="icon-meaning">
                                        <span className="white-text col-10">Watch videos on YouTube</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="footer-social-icon instagram">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </div>
                                    <div className="icon-meaning">
                                        <span className="white-text col-10">Friend us on Instagram</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="footer-social-icon pinterest">
                                        <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                                    </div>
                                    <div className="icon-meaning">
                                        <span className="white-text col-10">Repin on Pinterest</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="footer-top-content col-lg-3 col-md-6 col-sm-12">
                        <h3 className="footer-titles">Popular posts</h3>
                        <ul className="footer-top-menu popular-post-area">
                            <li>
                                <p className="white-text">September, 30</p>
                                <p className="cyan-text">Candy canes dragée pudding. Donut cheesecake I love chocolate icing </p>
                            </li>
                            <li>
                                <p className="white-text">April, 22</p>
                                <p className="cyan-text">Muffin croissant cookie sesame snaps. Ice cream donut cookie gingerbread</p>
                            </li>
                            <li>
                                <p className="white-text">May, 12</p>
                                <p className="cyan-text">Cotton candy muffin tart gummies candy danish liquorice chupa chups tootsie roll</p>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="footer-bottom row">
                    <div className="bottom-content">
                        <p>© 2014 StylemixThemes.All rights reserved</p>
                        <p>Powered dy WordPress</p>
                    </div>
                    <button className="transp-btn-footer" type="submit">Back to top of page<i className="fa fa-angle-up" aria-hidden="true"></i></button>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;