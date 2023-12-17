import React from 'react';
 

class STATE extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        count: 0
    };
}

handlIncreament = () => {
    this.setState({
        count : this.state.count + 1
    })
}
handlDecreament = () => {
    this.setState({
        count : this.state.count -1
    })
}


    render() {
        const {count} = this.state
        return <div>
            <h1>Count: {count}</h1>
            <button onClick={this.handlIncreament} > ++ </button>
            <button onClick={this.handlDecreament} disabled={count === 0 ? true : false} > -- </button>
        </div>;
    }
}

export default STATE;