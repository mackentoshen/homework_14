import React from 'react';

//components
import GridContentTop from './GridContentTop';
import PortfolioSingle from './PortfolioSingle';

class Pages extends React.Component {
    render() {
        return(
            <div className="PagesPage">
                <GridContentTop/>
                <PortfolioSingle/>
            </div>
        );
    }
}

export default Pages;