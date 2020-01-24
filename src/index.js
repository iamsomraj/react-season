import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {
  state = {
    lat: null,
    error: ''
  };

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      success => {
        this.setState({ lat: Math.round(success.coords.latitude) });
      },
      error => {
        this.setState({ error: error.message });
      }
    );
  };

  renderContent = () => {
    if (this.state.lat && !this.state.error) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    } else if (!this.state.lat && this.state.error) {
      return (
        <div>
          <h1>Error : {this.state.error}</h1>
        </div>
      );
    }

    return <Spinner message="Please, Accept Location Request!" />;
  };

  render() {
    return <div className="App">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
