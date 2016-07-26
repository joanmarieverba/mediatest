import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MediaList from './MediaList.jsx';

export default class MediaSubmitButton extends Component {
  render() {
    return (
     <input type="button" onClick={this.props.onSubmitButtonClick} value="Submit" />
    );
  }
};
