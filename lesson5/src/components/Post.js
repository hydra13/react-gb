import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Post extends Component {
    render() {
        const { id, title, body, userId } = this.props;
        return (
            <div className="card border-secondary mb-3">
                <div className="card-header">
                    <Link to={`posts/${id}`}>
                        {title}
                    </Link>
                </div>
                <div className="card-body text-secondary">
                    <p>{body}</p>
                    <Link to={`users/${userId}`}>
                        Об авторе
                    </Link>
                </div>
            </div>
        )
    }
}
