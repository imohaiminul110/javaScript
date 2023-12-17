import React from 'react';
import Homepage from './Homepage';
import LoginPage from './LoginPage';

class CONDITIONAL_RENDERING extends React.Component {

constructor(props) {
    super(props);

    this.state = {
        isLoggedIn : false
    };
}

    render() {
        const {isLoggedIn} = this.state
        let element;

        element = isLoggedIn ? <LoginPage /> : <Homepage />

        // if (isLoggedIn){
        //     element =  <LoginPage /> 
        // }
        // else {
        //     element =  <Homepage />
        // }
        return (
            <div>
                {element}
            </div>
        )
       
    }
}

export default CONDITIONAL_RENDERING;