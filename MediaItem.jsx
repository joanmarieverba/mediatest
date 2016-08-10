import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

var element1 = {
  display: "inline-block",
  marginRight: "50px",
  marginLeft: "10px",
  float: "left",
 };
var element2 = {
    display: "inline-block",
    float: "right",
 };

 var lineofheight = {
     display: "block",
     height: "20px",
  };

export default class MediaItem extends Component {
  render() {
    var url = `http://www.imdb.com/title/${this.props.id}`
    return (
      <div style={lineofheight}>
        <span style={element1}> <a href={url}> {this.props.title} </a> ({this.props.year}) </span>
        <span style={element2}>{this.props.type}   </span>
      </div>
    );
  }
}
