import React, { Component } from 'react';
import axios from 'axios';
import CommentComponent from '../components/Comment';

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: null
        }
    }
    render() {
        return (
            <div>
                {this.state.comment && <CommentComponent {...this.state.comment} />}
            </div>
        )
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/comments/${this.props.match.params.commentId}`)
            .then(response => {
                this.setState({ comment: response.data })
            })
    }

}
