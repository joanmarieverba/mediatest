import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MediaItem from './MediaItem.jsx';

var titleStyle = {
    border: "2px solid purple",
    display: "inline-block",
    marginTop: "50px",
    marginLeft: '50px',
    fontFamily: "Righteous",
    fontSize: "14px",
    padding: '15px',
    WebkitTransition: 'all',
    msTransition: 'all'
 };

export default class MediaList extends Component {
  render() {
    return (
      <div style={titleStyle}>
        <h3>List of media  titles and types</h3>
        {this.props.media.map(function(item){
            return (
             <MediaItem title={item.Title} type={item.Type}  id={item.imdbID}/> 
            )
        })}
      </div>
    );
  }
}
