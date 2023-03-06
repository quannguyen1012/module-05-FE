import React, { Component } from 'react';

class Hello extends Component {
    componentWillUnmount() {
        alert('the component is going to be unmounted');
    }

    render() {
        return <h1>Hello Word!!!</h1>
    }
}
export default Hello;