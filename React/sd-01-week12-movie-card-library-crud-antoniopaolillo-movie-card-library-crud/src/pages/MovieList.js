import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: [],
    };
  }
  componentDidMount() {
    getMovies().then((data) => {
      this.setState({
        loading: false,
        movies: data,
      });
    });
  }
  render() {
    const { movies } = this.state;

    if (this.state.loading) return <Loading />;

    return (
      <div className="movie-list-page">
        <Link className="btn" to="/movies/new">ADICIONAR CARTÃO</Link>
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
}

export default MovieList;
