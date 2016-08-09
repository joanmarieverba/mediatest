import React, {Component} from 'react';
import ReactDOM from 'react-dom';

var inputBox = {
  marginTop: "30px",
  display: "inline-block",
  textAlign: "center",
  fontFamily: "Bungee",
  fontWeight: "bold",

}

export default class MediaSearchInput extends Component {
  render() {
    return (
      <label style={inputBox}> Media Search:
      <input type="text" placeholder="Enter search term" onChange={this.props.onSearchInputChange}/>
      </label>
    );
  }
};
