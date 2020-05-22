import React from 'react';
import PropTypes from 'prop-types';
import './mainPage.css';

class SearchBar extends React.Component {
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.onChange(event);
    }
  }

  render() {
    return (
      <div className="search-box">
        <input className="input-style" type="text" onKeyPress={(e) => this.handleKeyPress(e)} />
      </div>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};
