import React, {PureComponent} from 'react';
import ArticleList from '../components/Articles/ArticleList'
import {articles} from '../data/fixtures';

class App extends PureComponent {
    render() {
        return (
            <ArticleList articles={articles}/>
        )
    }
}

export default App;
