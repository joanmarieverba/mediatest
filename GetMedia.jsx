import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MediaList from './MediaList.jsx';

const omdb = function omdb(query) {
  return $.ajax({
    url: "http://www.omdbapi.com/",
    // The name of the callback parameter, as specified by the YQL service
    jsonp: "callback",
    // Tell jQuery we're expecting JSONP
    dataType: "jsonp",
    // Tell YQL what we want and that we want JSON
    data: Object.assign({}, { r: "json" }, query)
  })
};

export default class GetMedia extends Component {
  //constructor only gets executed once
    constructor(props) {  //allows you to set the initial state of the component
      super(props);
      this.state={
        media: []    //this is the initial state, needs to be empty at first
      }
  //      this.getOneMedia(this.props.query);  //calls once  handled by the button click
    }
  getOneMedia(query){  //put it in a function so that it only gets called once

    // omdb({s: query,page:1}).then((response) => {
    omdb({s: query}).then((response) => {
      if (response && response.Response === "True") {

        this.setState({media: response.Search});   ///media comes back with reponse data in an array
      } else if (response && response.Response === "False") {
        this.setState({media: null});
      } else {
        console.error('Unknown error connecting to omdbapi.');
      }
    });
  }


  //if the query changed, call getOneMedia
  componentWillReceiveProps (nextProps){
  if (this.props.query !== nextProps.query){
    this.getOneMedia(nextProps.query);
  }
  }
  //react calls render over and over again by the brower when it refreshes
  render() {
    if (this.state.media !== null) {
      console.log(this.state.media);
    return (
      <div>
        <MediaList media={this.state.media}/>
      </div>
    );
    } else {
          return (
      <div>
        No results found
      </div>
    );
    }
  }
  };


// var page1 = omdb({s: query, page: 1});
// var page2 = omdb({s: query, page: 2});
//
// Promise.all ([page1, page2]).then (function(responses)){
//   this.setState({
//     media: responses[0].Search.concat(responses[1].Search);
//   })
// });
