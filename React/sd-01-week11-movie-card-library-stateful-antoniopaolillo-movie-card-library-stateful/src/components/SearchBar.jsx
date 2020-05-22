import React, { Component } from 'react';

class SearchBar extends Component {
  createInput() {
    return (
      <label htmlFor="title">
        Inclui o texto:
        <input
          id="title"
          type="text"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
      </label>
    );
  }

  createInputChecked() {
    return (
      <label htmlFor="favorited">
        Mostrar somente favoritos:
        <input
          id="favorited"
          type="checkbox"
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
        />
      </label>
    );
  }

  createSelect() {
    return (
      <label htmlFor="genre">
        Filtrar por gênero
        <select
          id="genre"
          onChange={this.props.onSelectedGenreChange}
          value={this.props.selectedGenre}
        >
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
  render() {
    return (
      <form>
        <fieldset>
          {this.createInput()}
          {this.createInputChecked()}
          {this.createSelect()}
        </fieldset>
      </form>
    );
  }
}

export default SearchBar;
