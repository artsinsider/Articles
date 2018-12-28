import React, {PureComponent}  from 'react';
import Articles                from './Articles';

export default class ArticleList extends PureComponent{
    state = {
        openArticleId: null
    };

    toggleOpenArticles = (openArticleId) => () => {
       const id =  openArticleId !== this.state.openArticleId ? openArticleId : null;
       this.setState({openArticleId: id})
    };

    render() {
        const {articles} = this.props;
        const {openArticleId} = this.state;

        return <ul>
            {articles.map(article =>
                <li key={article.id} >
                    <Articles
                        article={article}
                        isOpen={article.id === openArticleId}
                        toggleOpen={this.toggleOpenArticles(article.id)}
                    />
                </li>
            )}
        </ul>
    }
}