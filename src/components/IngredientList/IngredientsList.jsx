import React from 'react';

const IngredientsList = (props) => (
    <div className='IngredientsList'>
        <h1>Ingredients List</h1>
        {props.ingredients.map((ingredient, idx) => <div key={idx} className='ingredient'><p id={ingredient.name} onClick={props.addIngredient}>{ingredient.name}</p></div>)}
    </div>
)

export default IngredientsList;