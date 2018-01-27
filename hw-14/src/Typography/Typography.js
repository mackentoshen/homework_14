import React from 'react';

//components
import GridContentTop from './GridContentTop';
import PortfolioContent from './PortfolioContent';

class Typography extends React.Component {
    render () {
        return (
            <div className="TypographyPage">
                <GridContentTop/>
                <PortfolioContent/>
            </div>
        );
    }
}

export default Typography;