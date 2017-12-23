import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const ingredients = Object.keys(props.ingredients)
            .map(igKey => {
                return [...Array(props.ingredients[igKey])]  // Create an array of the correct length
                        .map((x, i) => <BurgerIngredient key={igKey + i} type={igKey} />)
            });
    return (
        <div className={ classes.Burger }>
            <BurgerIngredient type="bread-top"/>
            { ingredients }
            {/* { ingredients.map(key => {
                const counter = props.ingredients[key];
                let ingredientList = [];
                for (let i = 0; i < counter; i++) {
                    ingredientList.push(<BurgerIngredient key={key + i} type={key} />);
                }
                return ingredientList;
            })} */}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;