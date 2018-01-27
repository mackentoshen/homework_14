import React from 'react';

//components
import GridTop from './GridTop';
import GridMain from './GridMain';

class Elements extends React.Component {
    render() {
        return(
            <div className="ElementsPage">
                <GridTop/>
                <GridMain/>
            </div>
        );
    }
}

export default Elements;