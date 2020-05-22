import generateRandomLetter from '../services/randomLetter';

const linkMeatAPI = 'https://www.themealdb.com/api/json/v1/1/';
const linkDrinkAPI = 'https://www.thecocktaildb.com/api/json/v1/1/';
const linkRandomDrinkAPI = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const linkRandomMeatAPI = 'https://www.themealdb.com/api/json/v1/1/random.php';

export const mealAPI = (value = '', action, param) =>
  fetch(`${linkMeatAPI}${value}`)
    .then((response) => response.json())
    .then((data) =>
      (param ? action({ meals: data.meals.slice(0, 12) }) : action(data)),
    );

export const drinkAPI = (value = '', action, param) =>
  fetch(`${linkDrinkAPI}${value}`)
    .then((response) => response.json())
    .then((data) =>
      (param ? action({ drinks: data.drinks.slice(0, 12) }) : action(data)),
    );

export const mealLocalStorageAPI = (value = '') =>
  fetch(`${linkMeatAPI}${value}`)
    .then((response) => response.json())
    .then((data) => localStorage.setItem('foodData', JSON.stringify(data)));

export const drinkLocalStorageAPI = (value = '') =>
  fetch(`${linkDrinkAPI}${value}`)
    .then((response) => response.json())
    .then((data) => localStorage.setItem('foodData', JSON.stringify(data)));

export const mealRecommendedsAPI = (value = '', action) =>
  fetch(`${linkMeatAPI}${value}`)
    .then((response) => response.json())
    .then((data) => action({ meals: data.meals.slice(0, 6) }));

export const drinkRecommendedsAPI = (value = '', action) =>
  fetch(`${linkDrinkAPI}${value}`)
    .then((response) => response.json())
    .then((data) => action({ drinks: data.drinks.slice(0, 6) }));

export const mealRandomAPI = (action) =>
  fetch(linkRandomMeatAPI)
    .then((response) => response.json())
    .then((data) => action(data.meals[0].idMeal));

export const drinkRandomAPI = (action) =>
  fetch(linkRandomDrinkAPI)
    .then((response) => response.json())
    .then((data) => action(data.drinks[0].idDrink));

export const listAllAreasAPI = (action) =>
  fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    .then((response) => response.json())
    .then((data) => action(data));

export const filterAreAPI = (action, country) => {
  if (country === 'All') {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${generateRandomLetter()}`)
    .then((response) => response.json())
    .then((data) => action(data));
  } else {
    fetch(`${linkMeatAPI}filter.php?a=${country}`)
      .then((response) => response.json())
      .then((data) => action(data));
  }
};
