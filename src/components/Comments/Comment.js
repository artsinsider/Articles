import React from 'react';

export default function Comment(props) {
    const {comment: {user, id, text}} = props;
    return  <div key={id}>
                <h4>{user}</h4>
                <span>{text}</span>
            </div>
}