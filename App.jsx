import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GetMedia from './GetMedia.jsx';
import MediaSearchInput from './MediaSearchInput.jsx';
import MediaSubmitButton from './MediaSubmitButton.jsx';
import globalStyles from "./assets/styles/global.css";
  /**
   * A stateful component to store our app
   */
   var pageTitleStyle = {
       backgroundImage: 'url("http://jmvtestsite.com/wp-content/uploads/2016/07/texture.jpg")',
       position: "fixed",
       height: "100%",
       width: "100%",
       margin: "0 auto",
       WebkitTransition: 'all',
       msTransition: 'all'
    };

    var headerStyle = {
      textAlign: "center",
      fontFamily: "Bungee",
      fontWeight: "bold",
    }

    var centeredStyle = {
      textAlign: "center",
      margin: "0 auto",
    }

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
          <h2 style={headerStyle}>Input your favorite media (movie, TV series, episode) title.</h2>
          <h2 style={headerStyle}> Click on the title to go to the imdb page.</h2>
          <div style={centeredStyle}>
            <MediaSearchInput onSearchInputChange={this.handleSearchInputChange.bind(this)}/>
            <MediaSubmitButton onSubmitButtonClick={this.handleSubmitButtonClick.bind(this)}/>
            <GetMedia query={this.state.query}/>
          </div>
        </div>
      );
    }
  };

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
