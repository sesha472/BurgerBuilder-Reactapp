

import React,{Component} from 'react';
import Aux from '../../hoc/Auxhoc.js';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';

const INGEDIENT_PRICE={
    salad:1,
    cheese:2,
    meat:3,
    bacon:4
}

class BurgurBuilder extends Component{


    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4
    };

     addIngredingHandler=(type)=>{
         const oldcount=this.state.ingredients[type];

        const updatedcount=oldcount+1;
        const updatedIngredients= {
        ...this.state.ingredients
        };
        updatedIngredients[type]=updatedcount;
       const priceAddition =INGEDIENT_PRICE[type]
       const oldPrice=this.state.totalPrice;
       const newPrice=oldPrice+priceAddition;
       this.setState({totalPrice:newPrice,ingredients:updatedIngredients})
       
    }

    removeIngredientHandler=(type)=>{
        const oldcount=this.state.ingredients[type];
        if(oldcount<=0){
            return;
        }
       const updatedcount=oldcount-1;
       const updatedIngredients= {
       ...this.state.ingredients
       };
       updatedIngredients[type]=updatedcount;
      const priceDeduction =INGEDIENT_PRICE[type]
      const oldPrice=this.state.totalPrice;
      const newPrice=oldPrice-priceDeduction;
      this.setState({totalPrice:newPrice,ingredients:updatedIngredients})
      
   }

   
    render(){

        const disableinfo={
            ...this.state.ingredients
        };
        for(let key in disableinfo){
            disableinfo[key]=disableinfo[key]<= 0
        }
    
        //in thi splace check the condition 
        // {sald:true,or meta:false, ....}
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
               <BuildControls 
               ingredientAdded={this.addIngredingHandler}
              ingredinetRemoved={this.removeIngredientHandler} 
             disabled={disableinfo}
         price={this.state.totalPrice}

             />
            </Aux>
        )
    }
}

export default BurgurBuilder;