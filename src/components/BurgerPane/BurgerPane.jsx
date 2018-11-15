import React from 'react';
import BurgerStack from './BurgerStack';

const BurgerPane = (props) => (
    <div className='BurgerPane'>
        <BurgerStack stack={props.stack}/>
        <button onClick={props.clearBurger}>Clear</button>
    </div>
)

export default BurgerPane;