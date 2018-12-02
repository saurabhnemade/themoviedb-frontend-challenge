import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
    static propTypes = {
      match: PropTypes.object
    };

    render() {
        return (
            <div>
                Search Results for : {this.props.match.params.term}
            </div>
        );
    }
}