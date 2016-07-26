import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

var element1 = {
  display: "inline-block",
  marginRight: "25px",
 };
var element2 = {
    display: "inline-block",
    float: "right",
 };

export default class MediaItem extends Component {
  render() {
    var url = `http://www.imdb.com/title/${this.props.id}`
    return (
      <div>
        <span style={element1}> <a href={url}> {this.props.title} </a>  </span>
        <span style={element2}>{this.props.type}   </span>
      </div>
    );
  }
}
