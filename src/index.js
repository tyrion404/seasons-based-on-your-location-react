import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            errMessage: ''
        };
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ latitude: position.coords.latitude }),
            (err) => this.setState({ errMessage: err.message })
        );
    }

    render() {
        if (this.state.errMessage && !this.state.latitude) {
            return (
                <div>
                    <h3>{this.state.errMessage}</h3>
                </div>
            );
        } else if (!this.state.errMessage && this.state.latitude) {
            return (
                <div>
                    <h3>{this.state.latitude}</h3>
                </div>
            );
        }

        return (
            <div>
                <h3>Loading...</h3>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);