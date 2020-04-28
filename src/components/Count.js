import React from "react";
import Coin from "./Coin";

class Count extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            flips: 0,
            heads: 0,
            tails:0,
            id: null
        }
        this.handleFlip = this.handleFlip.bind(this)
    }

    handleFlip() {
        this.setState((prevState) => {
            let edit = {
                ...prevState,
                flips: prevState.flips + 1,
                id: Math.floor(Math.random() * 2) + 1
            }
            if(edit.id === 1) {
                edit.heads += 1
            } else {
                edit.tails += 1
            }
            return edit
        })
    }

    render() {
        return (
            <div>
                <h1>Flip the coin!</h1>
                {!this.state.id && <h5>Press the button to get started</h5>}
                <div>
                    <Coin id={this.state.id} />
                </div>
                <button onClick={this.handleFlip}>Flip</button>
                <p>Out of {this.state.flips} flips, you got {this.state.heads} heads, and {this.state.tails} tails</p>
                {this.state.id === 1 && <h3>You got HEADS!</h3>}
                {this.state.id === 2 && <h3>You got TAILS!</h3>}
            </div>
        );
    }
}
export default Count