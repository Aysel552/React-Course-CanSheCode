import { Component } from "react";
import emptyHeart from "./heart.png";
import fullHeart from "./heart2.png";

export class Heart extends Component{

    state = {
        CTA: "LIKE US!",
        image: emptyHeart
    }

    heartClicked = () => {
        this.setState({
            CTA: "Thank you! We love you, too!",
            image: fullHeart
        })
    }
    render() {
        return <div>
            <div className="container">
                <h1>{this.state.CTA}</h1>
            </div>
            <div className="container">
            <img onClick={this.heartClicked} src={this.state.image} alt="Heart" width="200px" />
            </div>
        </div>
    }
}