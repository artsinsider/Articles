import React       from 'react';
import ReactDOM    from 'react-dom';
import ArticleList from './components/Articles/ArticleList'

ReactDOM.render(<ArticleList/> ,document.getElementById('app'));
module.hot.accept();