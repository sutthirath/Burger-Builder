import React from 'react';

const BurgerStack = (props) => {
    return (
        <div>
            <h1>Your Burger</h1>
            {props.stack.map((ingredient, idx) => <p key={idx} style={{backgroundColor:ingredient.color}}>{ingredient.name}</p>)}
        </div>
    )
}

export default BurgerStack;