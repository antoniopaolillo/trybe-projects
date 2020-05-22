import React from 'react';
import PropTypes from 'prop-types';
import './ProductList.css';
import EachProduct from './EachProduct';
import ButtonOrderedBy from './ButtonOrderedBy';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: '',
    };
    this.fetchURL = this.fetchURL.bind(this);
    this.requestAPI = this.requestAPI.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const { category, searchBarText } = this.props;
      this.requestAPI(category, searchBarText);
    }
  }

  fetchURL(url) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const myInit = {
      headers: myHeaders,
    };

    fetch(url, myInit)
      .then((data) => data.json())
      .then((newData) => this.setState({ results: newData.results }));
  }

  requestAPI(category, searchBarText) {
    if (searchBarText !== '' && category !== '') {
      this.fetchURL(
        `https://api.mercadolibre.com/sites/MLB/search?category=${category}&q=${searchBarText}`,
      );
    } else if (searchBarText !== '' && category === '') {
      this.fetchURL(
        `https://api.mercadolibre.com/sites/MLB/search?q=${searchBarText}`,
      );
    } else if (searchBarText === '' && category !== '') {
      this.fetchURL(
        `https://api.mercadolibre.com/sites/MLB/search?category=${category}`,
      );
    }
  }

  ordenedResult(newResult) {
    this.setState({
      results: newResult,
    });
  }

  render() {
    const { results } = this.state;
    const { searched, updateCartState } = this.props;
    if (results.length > 0) {
      return (
        <div className="show-all-info">
          <div className="button-ordered-by">
            <ButtonOrderedBy result={results} onChange={(e) => this.ordenedResult(e)} />
          </div>
          <div className="card-container">
            {results
              .map((result) => (
                <EachProduct
                  key={result.id}
                  result={result}
                  updateCartState={updateCartState}
                />
              ))}
          </div>
        </div>
      );
    }
    if (results.length === 0 && searched) {
      return (
        <div className="msg">
          <p>Não foram encontradas nenhuma ocorrência para essa busca.</p>
        </div>
      );
    }
    return <div className="msg"><p>Você ainda não buscou nada!</p></div>;
  }
}
export default ProductsList;

ProductsList.propTypes = {
  category: PropTypes.string.isRequired,
  searchBarText: PropTypes.string.isRequired,
  searched: PropTypes.bool.isRequired,
  updateCartState: PropTypes.func.isRequired,
};
