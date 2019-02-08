import React, {PureComponent} from 'react';
import PropTypes              from 'prop-types';
import {findDOMNode}          from 'react-dom';
import CommentList            from '../Comments/CommentList';
import axios from 'axios';

class Courses extends PureComponent {
    // static propTypes = {
    //     article: PropTypes.shape({
    //         id: PropTypes.string.isRequired,
    //         title: PropTypes.string.isRequired,
    //         text: PropTypes.string.isRequired,
    //         date: PropTypes.string.isRequired,
    //     }).isRequired
    // };


    componentDidMount() {
       axios.get('http://localhost:3001/api/courses')
           .then(function (response) {
               console.log('response',response);
               return response
           })
           .catch(function (error) {
               console.log('error',error);
           });
    }

    render() {

        return (
            <div>
                <h1>000000</h1>
            </div>
        )
    }
}

export default Courses;