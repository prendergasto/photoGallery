import React, { Component } from 'react'
import ImageItem from './imageItem.js'
import images from './data.js';
 



export default class ImageList extends Component {
    state = { selected: null };

    render() {
    //     const dataNode = images
    //     .filter(data => {
    //         if (!this.selected.state) return true;

    //         return data.horns === this.state.selected || data.keyword === this.state.selected || data.title === this.state.selected || data.keyword === this.state.selected || data.url === this.state.selected
    //     })
    //     .map((data) => <fart key={data.title} fart={data} />);
    //     const handleChange = e => {
    //   this.setState({ selected: e.target.value });
        return (
            <div id="list-container">
                <ol>
                    {this.props.images.map(image => <ImageItem data={image} />)}
                </ol>
            
            { /* <select className="data-keyword-filter" onChange={handleChange}>
                <option value="" defaultValue>
                Keyword
                </option>
                {images.map(data => <option key={data.title}>{data.keyword}</option>)};
            </select> */ }
            </div>
        )
    }
    }
