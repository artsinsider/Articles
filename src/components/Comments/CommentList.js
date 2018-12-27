import React, {PureComponent}  from 'react';
import PropTypes               from 'prop-types';
import Comment                 from './Comment';
import toggleOpen              from '../../decorators/toggleOpen';

class CommentList extends PureComponent {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        opened: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    };

    render () {
        const {comments=[], opened, toggleOpen} = this.props;
        return (
            <ul>
                <button onClick={toggleOpen} >{opened ? 'Hide comments':'Show comments'}</button>
                {opened && comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
            </ul>
        )
    }
}

export default toggleOpen(CommentList)
