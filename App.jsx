import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GetMedia from './GetMedia.jsx';
import MediaSearchInput from './MediaSearchInput.jsx';
import MediaSubmitButton from './MediaSubmitButton.jsx';
  /**
   * A stateful component to store our app
   */
   var pageTitleStyle = {
       backgroundImage: 'url("http://jmvtestsite.com/wp-content/uploads/2016/07/texture.jpg")',
       position: "fixed",
       height: "100%",
       width: "100%",
       fontFamily: "Arial",
       fontSize: "14px",
       fontWeight: "bold",
       WebkitTransition: 'all',
       msTransition: 'all'
    };

  class App extends Component {
    constructor(props) {   //this handles the intital state of the query
      super(props);
      this.state = {
        query: "",
        searchQueryValue:''
      }
    }
    handleSubmitButtonClick(e) {   //method
           //go get more data e.target.value
           //set state, use bind below to insure we get the right value for this
    //set state to new query
      this.setState({query: this.state.searchQueryValue});
    }
    handleSearchInputChange(e){
      //we have a value
      console.log(e.target.value);
      //call another function which actually changes the state being sent into getMedia (fetcher)
      this.setState({searchQueryValue: e.target.value});
    }
    render() {
      return (
        <div style={pageTitleStyle}>
          <h3>Input your favorite media (movie, TV show, etc.) title. Click on title to go to the imdb page.</h3>
          <MediaSearchInput onSearchInputChange={this.handleSearchInputChange.bind(this)}/>
          <MediaSubmitButton onSubmitButtonClick={this.handleSubmitButtonClick.bind(this)}/>
          <GetMedia query={this.state.query}/>
        </div>
      );
    }
  };

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
