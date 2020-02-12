import React, { Component } from 'react'
import ImageItem from './imageItem.js'
import images from './data.js'
 

export default class ImageList extends Component {
    render() {
        return (
            <div id="list-container">
                <ul>
                    {this.props.images.map(image => <ImageItem data={image} />)}
                </ul>
            </div>
        )
    }
}