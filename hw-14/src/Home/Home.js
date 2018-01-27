import React from 'react';

//components
import Welcome from './Welcome';
import Steal from './Steal';
import LatestWorks from './LatestWorks';
import WpPurchase from './WpPurchase';
import Features from './Features';
import Quote from './Quote';
import BlogPosts from './BlogPosts';
import Expirience from './Expirience';
import Team from './Team';

class Home extends React.Component {
    render() {
        return(
            <div className="HomePage">
                <Welcome/>
                <Steal/>
                <LatestWorks/>
                <WpPurchase/>
                <Features/>
                <Quote/>
                <BlogPosts/>
                <Expirience/>
                <Team/>
            </div>
        );
    }
}

export default Home;