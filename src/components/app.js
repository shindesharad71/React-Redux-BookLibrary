import React from 'react';
import { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
        <div className="row">
            <div className="col-md-4">
                <BookList/>
            </div>
            <div className="col-md-8 list-group-item">
                <BookDetail/> 
            </div>
        </div>
    );
  }
}
