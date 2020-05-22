import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((data) => {
      this.setState({
        loading: false,
        movie: data,
      });
    });
  }

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img alt="Movie Cover" src={`../${this.state.movie.imagePath}`} />
              <span className="card-title">{this.state.movie.title}</span>
            </div>
            <div className="card-content">
              <p>{`Subtitle: ${this.state.movie.subtitle}`}</p>
              <p>{`Storyline: ${this.state.movie.storyline}`}</p>
              <p>{`Genre: ${this.state.movie.genre}`}</p>
              <p>{`Rating: ${this.state.movie.rating}`}</p>
            </div>
            <div className="card-action">
              <Link to={`/movies/${this.props.match.params.id}/edit`}>
                EDITAR
              </Link>
              <Link to="/">VOLTAR</Link>
              <Link to="/" onClick={() => movieAPI.deleteMovie(this.props.match.params.id)}>
                DELETAR
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: {
      id: PropTypes.number,
    },
  }).isRequired,
};

export default MovieDetails;
