import React, { Component } from 'react'

 
export default class ImageItem extends Component {
    render() {
        return(
            <li>
                {/* <div id="imageDetails"> */}
                    <h2>{this.props.data.title}</h2>
                    <img src={this.props.data.url} alt=""/>
                    <p className="dataDescription">{this.props.data.description}</p>
                    <h2>Keyword: {this.props.data.keyword}</h2>
                    <h2># of horns: {this.props.data.horns}</h2>
                {/* </div> */}
            </li>
        );
    }

}
