// import './App.css';
import React from 'react'

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    incrCount = () => { //arrow fun must
        this.setState((prev) => ({
            counter: prev.counter + 1
        }))
    }
    componentDidMount() {
        // setTimeout(()=>this.incrCount(), 1000);
        // OR 
        setTimeout(this.incrCount, 1000);
    }
    componentDidUpdate() {
        setTimeout(this.incrCount, 1000);
    }
    componentWillUnmount() {
        console.log("unmounted");
    }

    render() {
        const { counter } = this.state
        console.log(counter);
        return (
            <div id="app">
                <h1>count: {counter}</h1>
            </div>
        )
    }
}
export default Footer