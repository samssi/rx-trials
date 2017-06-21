import React from "react";
import streamStore from "./streamStore";

class Input extends React.Component {
    constructor() {
        super();
    }

    handleChange(event) {
        streamStore.stream().next(event.target.value);
    }

    render() {
        return(
            <div>
                <input type="text" onChange={this.handleChange.bind(this)} />
            </div>)
    }
}

export default Input;