import { Component } from 'react';

export class Posts extends Component{
    constructor() {
        super()

        this.state = {
            posts:300
        }
    }

    removePost() {
        this.setState({posts:this.state.posts - 1})
        
    }

    render() {
        return (
            <div>
            <h1>{this.state.posts} POSTS</h1>
            <button onClick={() => this.removePost()}>Post</button>
            </div>
        )
        
    }
}