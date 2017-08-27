import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book) {
            return (<div className="alert alert-info">
                        Select A Book To Get Started!
                    </div>
                );
        }

        return(
            <div>
                <h3>Book Details</h3><br/>
                <div><strong>Title:</strong> { this.props.book.title }</div>
                <div><strong>Pages:</strong> { this.props.book.pages }</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);