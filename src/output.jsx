import React from "react";
import streamStore from "./streamStore";

class Output extends React.Component {
    constructor() {
        super();
        this.state = {
            text: ""
        }
    }

    componentDidMount() {
        streamStore.subjectStream().subscribe((value) => { setTimeout(() => this.setState({ text: value }), 2000); });
        streamStore.websocketStream("message").subscribe((value) => {this.setState({ text: value })});
    }

    render() {
        return(
        <div>
            <input type="text" value={this.state.text} readOnly />
        </div>)
    }
}

export default Output;