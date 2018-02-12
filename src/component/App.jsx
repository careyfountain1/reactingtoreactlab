import React, { Component, Fragment } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        }
    }

    handleTextChange = (value) => {
        this.setState({text: value})
    }

    hasLoaded = () => {
        if (this.state.hasLoaded === undefined) {
            this.setState({hasLoaded: false});
        }else {
            this.setState({hasLoaded: !this.state.hasLoaded})
        }    
    }

    render () {
            if (this.state.hasLoaded) {
                return (
                <Fragment>
                    <h1>Roses are red violets are blue sugar is sweet and I just farted on YOU :)</h1>
                    <input
                    placeholder="Alliteration"
                    value={this.state.text}
                    onChange={ (event) => this.handleTextChange(event.target.value)}
                    /> 
                    <button onClick={ () => { this.hasLoaded() }}>Wha Gwan?!</button>
                    <p>Running rampetedly {this.state.text} remembered</p>
                </Fragment>
                )
            } else {
                return (
                    <Fragment>
                        <h1>Loading...</h1>
                        <button
                        onClick= { () => { this.hasLoaded() } }
                        >load
                        </button>
                    </Fragment>
                )    
            }
    }
}




export default App;