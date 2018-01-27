import React from 'react';

import { Route } from 'react-router-dom';

//components
import Home from "./Home/Home";
import Typography from "./Typography/Typography";
import Blog from "./Blog/Blog";
import Pages from "./Pages/Pages";
import Elements from "./Elements/Elements";


class Main extends React.Component {
    render() {
        return(
            <div className="Main">
                <Route exact path="/" component={Home}/>
                <Route path="/typography" component={Typography}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/pages" component={Pages}/>
                <Route path="/elements" component={Elements}/>
            </div>
        );
    }
}

export default Main;