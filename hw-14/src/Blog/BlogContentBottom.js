import React from 'react';

const BlogContentBottom = () => {
    return (
        <section className="blog-single-grey-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12">
                        <h5 className="blog-text-title">Add comment</h5>
                        <form className="comments-form">
                            <div className="comment-input-field row">
                                <label className="col-lg-4 col-md-4 col-sm-12">
                                    <span>Name</span>
                                    <input type="text" size="25"/>
                                </label>
                                <label className="col-lg-4 col-md-4 col-sm-12">
                                    <span>Email</span>
                                    <input type="email" size="25"/>
                                </label>
                                <label className="col-lg-4 col-md-4 col-sm-12">
                                    <span>Website</span>
                                    <input type="text" size="25"/>
                                </label>
                            </div>
                            <div className="comment-textarea-field">
                                <span>Message</span>
                                <textarea className="col-12" rows="5" name="comment" required></textarea>
                            </div>
                            <button className="comments-button" type="submit">add comment</button>
                        </form>
                        <h5 className="blog-text-title">24 comments</h5>
                        <div className="comments-area">
                            <article className="comments-article">
                                <div className="comments-line">
                                    <a className="cyan-text" href="#">Administrator</a>
                                    <a className="comments-reply" href="#">Reply</a>
                                </div>
                                <p className="grey-text">September 17, 2013 &#64; 1:38 pm</p>
                                <p className="comment-text">
                                    Small batch sartorial, single-origin coffee food truck tousled sed swag hella synth
                                    bitters next level consectetur Helvetica twee. Craft beer ea tofu sint reprehenderit
                                    cornhole, occaecat put a bird on it  single-origin coffee Tonx. Small batch 3 wolf
                                    moon ad, adipisicing fap cornhole.
                                </p>
                            </article>
                            <article className="comments-article user-answer">
                                <div className="comments-line">
                                    <a className="cyan-text" href="#">Alina</a>
                                    <a className="comments-reply" href="#">Reply</a>
                                </div>
                                <p className="grey-text">September 17, 2013 &#64; 1:38 pm</p>
                                <p className="comment-text">
                                    Small batch sartorial, single-origin coffee food truck tousled sed swag hella synth
                                    bitters next level consectetur Helvetica twee. Craft beer ea tofu sint reprehenderit
                                    cornhole, occaecat put a bird on it  single-origin coffee Tonx. Small batch 3 wolf
                                    moon ad, adipisicing fap cornhole.
                                </p>
                            </article>
                            <article className="comments-article">
                                <div className="comments-line">
                                    <a className="cyan-text" href="#">Administrator</a>
                                    <a className="comments-reply" href="#">Reply</a>
                                </div>
                                <p className="grey-text">September 17, 2013 &#64; 1:38 pm</p>
                                <p className="comment-text">
                                    Small batch sartorial, single-origin coffee food truck tousled sed swag hella synth
                                    bitters next level consectetur Helvetica twee. Craft beer ea tofu sint reprehenderit
                                    cornhole, occaecat put a bird on it  single-origin coffee Tonx. Small batch 3 wolf
                                    moon ad, adipisicing fap cornhole.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogContentBottom;