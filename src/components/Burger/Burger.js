
import React from 'react';

import classes from './Burger.css';
import BurgurIngredient from './Burgeringredient/Burgeringredient';


const burger = (props) => {

let transformedIngredients= Object.keys(props.ingredients).map(igkey=> {

    return [...Array(props.ingredients[igkey])].map((_, i) =>{

       return <BurgurIngredient key={igkey+i} type={igkey} />;
    });
}).reduce((arr,el)=>{
    return arr.concat(el);
},[]);
if(transformedIngredients === 0){
    transformedIngredients=<p>please start adding ingredints</p>
}

console.log(transformedIngredients);
   
    return (
        <div className={classes.Burger}>
            <BurgurIngredient type="bread-top"/>
            {transformedIngredients}
            {/* <BurgurIngredient type="cheese"/>
            <BurgurIngredient type="meat"/> */}
            <BurgurIngredient type="bread-bottom"/>

        </div>
    );
    
}
export default burger;