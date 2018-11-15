import React, { Component } from 'react';
import './App.css';
import IngredientsList from './components/IngredientList/IngredientsList';
import BurgerPane from './components/BurgerPane/BurgerPane';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients:  [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}
      ],
      stack: []
    }
    this.addIngredient = this.addIngredient.bind(this);
    this.clearBurger = this.clearBurger.bind(this);
  }

  addIngredient(e) {
    let item = this.state.ingredients.findIndex(ingredient => ingredient.name === e.target.id);
    let stacks = this.state.stack;
    stacks.push(this.state.ingredients[item]);
    this.setState({
      stack: stacks
    })
  }

  clearBurger() {
    this.setState({
      stack: []
    })
  }

  render() {
    return (
      <div className="App">
        <IngredientsList addIngredient={this.addIngredient} ingredients={this.state.ingredients}/>
        <BurgerPane clearBurger={this.clearBurger} stack={this.state.stack}/>
      </div>
    );
  }
}

export default App;
