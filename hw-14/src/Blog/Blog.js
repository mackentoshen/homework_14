import React from 'react';

//components
import GridContentTop from './GridContentTop';
import BlogContent from './BlogContent';
import BlogContentBottom from './BlogContentBottom';

class Blog extends React.Component {
    render() {
        return (
            <div className="BlogPage">
                <GridContentTop/>
                <BlogContent/>
                <BlogContentBottom/>
            </div>
        );
    }
}

export default Blog;