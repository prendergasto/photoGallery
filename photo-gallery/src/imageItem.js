import React, { Component } from 'react'

 
export default class ImageItem extends Component {
    render() {
        return(
            <ul>
                    {/* <h2>{this.props.data.title}</h2> */}
                    <img src={this.props.data.url} alt=""/>
                    <h2>{this.props.data.title}</h2>
                    <p className="dataDescription">{this.props.data.description}</p>
                    <h3>Keyword: {this.props.data.keyword}</h3>
                    <h3># of horns: {this.props.data.horns}</h3>
            </ul>
        );
    }

}
