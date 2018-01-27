import React from 'react';

const BlogPosts = () => {
    return (
        <section className="blog-posts-section">
            <div className="container">
                <div className="row">
                    <h3 className="section-headers-black col-12">Latest blog posts</h3>
                    <ul className="posts-area">
                        <li className="posts-area-info col-lg-4 col-md-12 ">
                            <img className="post-img" src="images/post-img1.jpg" alt="post"/>
                                <h4 className="cards-titles">Runway to Red Carpet: Awards Season</h4>
                                <p>
                                    Her father worked on oil rigs and farms that through most of the Depression.
                                    But it is a new story that has seared into my genetic.
                                </p>
                                <div className="posts-nav">
                                    <button className="blog-btn">Learn more</button>
                                    <div className="counter">
                                        <i className="fa fa-comments" aria-hidden="true"></i>
                                        <span>450</span>
                                    </div>
                                </div>
                        </li>
                        <li className="posts-area-info col-lg-4 col-md-12">
                            <img className="post-img" src="images/post-img2.jpg" alt="post"/>
                                <h4 className="cards-titles">Runway to Red Carpet: Awards Season</h4>
                                <p>
                                    Her father worked on oil rigs and farms that through most of the Depression.
                                    But it is a new story that has seared into my genetic.
                                </p>
                                <div className="posts-nav">
                                    <button className="blog-btn">Learn more</button>
                                    <div className="counter">
                                        <i className="fa fa-comments" aria-hidden="true"></i>
                                        <span>450</span>
                                    </div>
                                </div>
                        </li>
                        <li className="posts-area-info col-lg-4 col-md-12">
                            <img className="post-img" src="images/post-img3.jpg" alt="post"/>
                                <h4 className="cards-titles">Runway to Red Carpet: Awards Season</h4>
                                <p>
                                    Her father worked on oil rigs and farms that through most of the Depression.
                                    But it is a new story that has seared into my genetic.
                                </p>
                                <div className="posts-nav">
                                    <button className="blog-btn">Learn more</button>
                                    <div className="counter">
                                        <i className="fa fa-comments" aria-hidden="true"></i>
                                        <span>450</span>
                                    </div>
                                </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default BlogPosts;