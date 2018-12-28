import React, {PureComponent}  from 'react';
import PropTypes               from 'prop-types';
import Comment                 from './Comment';
import toggleOpen              from '../../decorators/toggleOpen';

class CommentList extends PureComponent {
    static propTypes = {
        comments: PropTypes.array,
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    };

    render () {
        const {comments=[], isOpen, toggleOpen} = this.props;
        return (
            <ul>
                <button onClick={toggleOpen} >{isOpen ? 'Hide comments':'Show comments'}</button>
                {isOpen && comments.map(comment =>
                    <li id={comment.id} key={comment.id}>
                        <Comment comment={comment}/>
                    </li>
                )}
            </ul>
        )
    }
}

export default toggleOpen(CommentList)
