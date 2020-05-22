import React, { useState } from 'react';
import PropTypes from 'prop-types';
import context from './context';

const Provider = ({ children }) => {
  const [disabled, setDisabled] = useState(true);
  const [result, setResult] = useState();
  const [email, setEmail] = useState();
  const [foodCategory, setFoodCategory] = useState();
  const [currentFood, setCurrentFood] = useState('Comidas');
  const [category, setCategory] = useState();
  const [searchInput, setSearchInput] = useState('');
  const [isShowInput, setIsShowInput] = useState(false);
  const [ingredient, setIngredient] = useState('');
  const [empty, setEmpty] = useState();
  const [clipboardCopied, setClipboardCopied] = useState(false);
  const [enableButton, setEnableButton] = useState(true);
  const [route, setRoute] = useState('');
  const [detailsData, setDetailsData] = useState();
  const [recommendeds, setRecommendeds] = useState();
  const [idFood, setIdFood] = useState('');
  const [filterFood, setFilterFood] = useState();
  const [countries, setCountries] = useState();
  const [randomFood, setRandomFood] = useState();
  const [numberOfMarkeds, setNumberOfMarkeds] = useState();

  const storeContext = {
    disabled,
    setDisabled,
    result,
    setResult,
    foodCategory,
    setFoodCategory,
    currentFood,
    setCurrentFood,
    category,
    setCategory,
    searchInput,
    setSearchInput,
    isShowInput,
    setIsShowInput,
    ingredient,
    setIngredient,
    email,
    setEmail,
    setEmpty,
    empty,
    clipboardCopied,
    setClipboardCopied,
    enableButton,
    setEnableButton,
    route,
    setRoute,
    detailsData,
    setDetailsData,
    recommendeds,
    setRecommendeds,
    idFood,
    setIdFood,
    filterFood,
    setFilterFood,
    countries,
    setCountries,
    randomFood,
    setRandomFood,
    numberOfMarkeds,
    setNumberOfMarkeds,
  };

  return <context.Provider value={storeContext}>{children}</context.Provider>;
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
