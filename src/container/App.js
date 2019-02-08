import React, {PureComponent} from 'react';
import ArticleList from '../components/Articles/ArticleList'
import Courses from '../components/Courses/Courses'
import {articles} from '../data/fixtures';

class App extends PureComponent {
    render() {
        return (
            <div>
                <ArticleList articles={articles}/>
                <Courses/>
            </div>

        )
    }
}

export default App;
