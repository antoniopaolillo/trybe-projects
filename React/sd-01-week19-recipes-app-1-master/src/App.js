import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import FoodPage from './components/FoodPage';
import IngredientsExploreScreen from './components/IngredientsExploreScreen';
import ExplorePage from './components/ExplorePage';
import ExploreFood from './components/ExploreFood';
import DetailsPage from './components/DetailsPage';
import ExploreOrigin from './components/ExploreOrigin';
import FoodFavorite from './components/FoodFavorite';
import FoodFinished from './components/FoodFinished';
import ProgressPage from './components/ProgressPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/explorar/comidas/area" component={ExploreOrigin} />
        <Route exact path="/explorar" component={ExplorePage} />
        <Route exact path="/explorar/comidas" component={ExploreFood} />
        <Route exact path="/explorar/bebidas" component={ExploreFood} />
        <Route path="/explorar/comidas/ingredientes" component={IngredientsExploreScreen} />
        <Route path="/explorar/bebidas/ingredientes" component={IngredientsExploreScreen} />
        <Route path="/perfil" component={ProfilePage} />
        <Route exact path="/receitas/comidas" component={FoodPage} />
        <Route exact path="/receitas/bebidas" component={FoodPage} />
        <Route path="/receitas-favoritas" component={FoodFavorite} />
        <Route path="/receitas-feitas" component={FoodFinished} />
        <Route exact path="/receitas/comidas/:id" component={DetailsPage} />
        <Route exact path="/receitas/bebidas/:id" component={DetailsPage} />
        <Route path="/receitas/comidas/:id/em-progresso" component={ProgressPage} />
        <Route path="/receitas/bebidas/:id/em-progresso" component={ProgressPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
