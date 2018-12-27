import React, {PureComponent} from 'react';
import PropTypes              from 'prop-types';
import CommentList            from '../Comments/CommentList';
import toggleOpen             from '../../decorators/toggleOpen';

class Articles extends PureComponent {
    static propTypes = {
        articles: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        }).isRequired
    };

    render() {
        const {articles, opened, toggleOpen} = this.props;
        const {title, text, comments} = articles;
        return (
            <div>
                <button onClick={toggleOpen} >{title}</button>
                <h2>{title}</h2>
                {opened &&
                    <section>
                        <p>{text}</p>
                        <CommentList comments={comments}/>
                    </section>
                }
            </div>
        )
    }
}

export default toggleOpen(Articles);