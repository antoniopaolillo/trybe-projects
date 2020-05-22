import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { mealAPI, drinkAPI } from '../services/foodAPI';
import context from '../context/context';
import '../styles/inputSearch.css';

const InputSearch = (setSearchInput, typeOfSearch, searchInput) => (
  <DebounceInput
    className="text-input"
    data-testid="search-input"
    value={searchInput}
    debounceTimeout={600}
    placeholder="Buscar receita"
    onChange={(e) => setSearchInput(e.target.value)}
    maxLength={typeOfSearch === 'search.php?f=' ? '1' : false}
  />
);

const RadioToSearch = (setTypeOfSearch) => (
  <div className="radios-input">
    <input
      data-testid="ingredient-search-radio"
      type="radio"
      value="filter.php?i="
      name="Radio_input-search"
      id="ingredients_radio-header"
      onClick={(e) => setTypeOfSearch(e.target.value)}
    />
    <label htmlFor="ingredients_radio-header">Ingrediente</label>
    <input
      data-testid="name-search-radio"
      type="radio"
      value="search.php?s="
      name="Radio_input-search"
      id="name_radio-header"
      onClick={(e) => setTypeOfSearch(e.target.value)}
    />
    <label htmlFor="name_radio-header">Nome</label>
    <input
      data-testid="first-letter-search-radio"
      type="radio"
      value="search.php?f="
      name="Radio_input-search"
      id="first-letter_radio-header"
      onClick={(e) => setTypeOfSearch(e.target.value)}
    />
    <label htmlFor="first-letter_radio-header">Primeira Letra</label>
  </div>
);

const InputHeader = () => {
  const {
    isShowInput,
    setResult,
    setSearchInput,
    searchInput,
    currentFood,
    setEmpty,
  } = useContext(context);
  const [typeOfSearch, setTypeOfSearch] = useState('');

  useEffect(() => {
    if (typeOfSearch === 'search.php?f=' && searchInput.length > 1) {
      return setSearchInput('');
    }
    if (typeOfSearch !== '' && searchInput !== '') {
      if (currentFood === 'Comidas') {
        mealAPI(`${typeOfSearch}${searchInput}`, setResult);
      } else {
        drinkAPI(`${typeOfSearch}${searchInput}`, setResult);
      }
    }
    return setEmpty('');
  }, [searchInput, typeOfSearch]);

  if (!isShowInput) return <div />;
  return (
    <div className="Header_input">
      {InputSearch(setSearchInput, typeOfSearch, searchInput)}
      {RadioToSearch(setTypeOfSearch)}
    </div>
  );
};

export default InputHeader;
