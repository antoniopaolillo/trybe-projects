export default function identifyData(data) {
  if (data.meals || data.idMeal) {
    return data.meals ? data.meals[0] : data;
  }
  return data.drinks ? data.drinks[0] : data;
}
