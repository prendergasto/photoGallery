import React, { Component } from "react";

export default class Filtered extends Component {
    render() {
        return(
            // <div id="bigger-filter-container">
                <div id="filtered-container">
                    <select className="unicornFilter" onChange={this.props.handleChangeCallback}>
                        <option value="narwhal" defaultValue>Narwhal</option>
                        <option value="rhino" defaultValue>Rhino</option>
                        <option value="unicorn" defaultValue>Unicorn</option>
                        <option value="unilego" defaultValue>UniLego</option>
                        <option value="triceratops" defaultValue>triceratops</option>
                        <option value="mouflon" defaultValue>Mouflon</option>
                        <option value="addax" defaultValue>Addax</option>
                        <option value="chameleon" defaultValue>Chameleon</option>
                        <option value="lizard" defaultValue>Lizard</option>
                        <option value="dragon" defaultValue>Dragon</option>
                    </select>
                </div>
            // </div>
        )
    }
};