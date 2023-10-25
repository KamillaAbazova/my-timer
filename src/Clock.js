import { Component } from "react";

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        }
    }
componentDidMount() {
    this.TimerID = setInterval( () => 
    this.tick(), 1000)
}
componentWillUnmount() {
    clearInterval(this.TimerID)
}

tick() {
    this.setState( {
        time: new Date().toLocaleTimeString()
    })
}
render() {
    return (
        <p className="Time">{ this.state.time }</p>
    )
}
}