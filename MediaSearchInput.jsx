import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class MediaSearchInput extends Component {
  render() {
    return (
      <label> Media  Search:
      <input type="text" placeholder="Enter search term" onChange={this.props.onSearchInputChange}/>
      </label>
    );
  }
};
