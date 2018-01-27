import React from 'react';

const GridContentTop = () => {
    return (
        <section className="grid-content-top">
            <div className="container">
                <div className="row col-12">
                    <h3 className="block-grid-title">Portfolio grid gallery</h3>
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