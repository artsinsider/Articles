import React      from 'react';
import Articles   from './Articles';
import {articles} from '../../data/fixtures';

export default function ArticleList() {
    return <ul> {articles.map(element => <li key={element.id} ><Articles articles={element} /></li>)} </ul>
}