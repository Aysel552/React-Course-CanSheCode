import { Component } from "react";

export class Followers extends Component{
    constructor() {
        super()


        this.state = {
            followers: 300
        }
    }

    reduceFollowers() {
        this.setState({followers: this.state.followers - 1})
    }


    render() {
        return (
            <div>
                <h1>{this.state.followers} Followers</h1>
                <button onClick={() => this.reduceFollowers()}>UNFOLLOW</button>
            </div>
        )
    }

}