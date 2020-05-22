import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.changeHandlerSearch = this.changeHandlerSearch.bind(this);
    this.changeHandlerMarked = this.changeHandlerMarked.bind(this);
    this.changeHandlerGenre = this.changeHandlerGenre.bind(this);
    this.findingMovies = this.findingMovies.bind(this);
    this.pushingNewMovie = this.pushingNewMovie.bind(this);
  }

  findingMovies() {
    let arrMovies = this.state.movies;
    if (this.state.searchText !== '') {
      arrMovies = this.state.movies.filter(
        (movie) =>
          movie.title.includes(this.state.searchText) ||
          movie.subtitle.includes(this.state.searchText) ||
          movie.storyline.includes(this.state.searchText),
      );
    }
    if (this.state.bookmarkedOnly) {
      arrMovies = arrMovies.filter((movie) => movie.bookmarked);
    }
    if (this.state.selectedGenre.length > 0) {
      arrMovies = arrMovies.filter(
        (movie) => movie.genre === this.state.selectedGenre,
      );
    }
    return arrMovies;
  }

  changeHandlerSearch(event) {
    this.setState({ searchText: event.target.value });
  }

  changeHandlerMarked(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  changeHandlerGenre(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  pushingNewMovie(values) {
    this.setState((state) => ({ movies: [...state.movies, values] }));
  }

  render() {
    return (
      <main>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={(event) => this.changeHandlerSearch(event)}
          onBookmarkedChange={(event) => this.changeHandlerMarked(event)}
          onSelectedGenreChange={(event) => this.changeHandlerGenre(event)}
        />
        <MovieList movies={this.findingMovies(this.state)} />
        <AddMovie onClick={this.pushingNewMovie} />
      </main>
    );
  }
}

export default MovieLibrary;
