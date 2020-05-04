import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            errMessage: ''
        };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ latitude: position.coords.latitude }),
            (err) => this.setState({ errMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.errMessage && !this.state.latitude) {
            return (
                <div>
                    <h3>{this.state.errMessage}</h3>
                </div>
            );
        } else if (!this.state.errMessage && this.state.latitude) {
            return (
                <div>
                    <SeasonDisplay latitude={this.state.latitude} />
                </div>
            );
        }
        return (
            <Loader message="Please accept location request." />
        );
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);