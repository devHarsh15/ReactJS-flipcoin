import React from "react";
import "./Coin.css"

class Coin extends React.Component{
    render() {
        const heads = "https://tinyurl.com/react-coin-heads-jpg"
        const tails = "https://tinyurl.com/react-coin-tails-jpg"
        return (
            <div>
                {this.props.id === 1 && <img src={heads} alt="heads"/>}
                {this.props.id === 2 && <img src={tails}  alt="tails"/>}
            </div>
        )
    }
}

export default Coin