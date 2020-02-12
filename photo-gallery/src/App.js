import React, { Component } from 'react';
import Header from "./header.js";
import ImageItem from "./imageItem.js"
import ImageList from "./imageList.js"
// import logo from './logo.svg';
import images from './data.js';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div id="container">
        <Header />
        <ImageList images={images}/>
      </div>
      
    )
  }

};