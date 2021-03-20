import React from 'react';
import Aux from '../../../hoc/Auxhoc.js';

const orderSumarry=(props)=>{
    const ingredientsummary = Object.keys(props.ingredients).map(igkey=>{
        return (<li key={igkey}>

            <span style={{textTransform:'capitalize'}}>{igkey}</span> :{props.ingredients[igkey]}
            
            </li>);
    })

    return (
        <Aux>
            <h3>your order</h3>
            <p>d dilesious Burger food with ingredinets:</p>
            <ul>
              {ingredientsummary}
            </ul>
          <p>contine to checkout</p>
          </Aux>
    );

};
export default orderSumarry