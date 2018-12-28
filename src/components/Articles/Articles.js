import React, {PureComponent} from 'react';
import PropTypes              from 'prop-types';
import {findDOMNode}          from 'react-dom';
import CommentList            from '../Comments/CommentList';

class Articles extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        }).isRequired
    };

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        const {title, text, comments} = article;
        return (
            <div>
                <button onClick={toggleOpen} >{title}</button>
                <h2>{title}</h2>
                {isOpen &&
                    <section>
                        <p>{text}</p>
                        <CommentList comments={comments}/>
                    </section>
                }
            </div>
        )
    }
}

export default Articles;