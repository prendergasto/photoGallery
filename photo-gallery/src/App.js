import React, { Component } from 'react';
import Header from "./header.js";
import Filtered from './Filtered.js';
// import ImageItem from "./imageItem.js"
import ImageList from "./imageList.js"
import images from './data.js';
import request from 'superagent'
import './App.css';


export default class App extends React.Component {
  state = {
    selected: null,
    horns: null,
  }
  render() {
    const handleChange = e => {
      this.setState({ selected: e.target.value })
    };

    return (
      <div id="container">
        <Header />
        <Filtered handleChangeCallback={handleChange} images={images}/>
        <ImageList images={images}/>
    </div>
    
      // Set(images).
      
    )
  }

};


// const image = {images}
//     images.map(image => <option image={images} value={image.keyword}>image.keyword</option>)