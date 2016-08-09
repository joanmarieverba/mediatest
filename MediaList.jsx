import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MediaItem from './MediaItem.jsx';

var titleStyle = {
    border: "5px solid purple",
    borderRadius: "15px",
    display: "inline-block",
    marginTop: "50px",
    marginLeft: '50px',
    fontFamily: "Bungee",
    fontSize: "14px",
    padding: '15px',
    backgroundColor: "#3ee61c",
    WebkitTransition: 'all',
    msTransition: 'all'
 };

export default class MediaList extends Component {
  render() {
    return (
      <div style={titleStyle}>
        <h2>List of media titles and types</h2>
        {this.props.media.map(function(item){
            return (
             <MediaItem title={item.Title} type={item.Type} year={item.Year} id={item.imdbID} key={item.imdbID}/>
            )
        })}
      </div>
    );
  }
}
