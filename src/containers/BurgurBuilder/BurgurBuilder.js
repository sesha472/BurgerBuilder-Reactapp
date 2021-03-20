

import React,{Component} from 'react';
import Aux from '../../hoc/Auxhoc.js';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';
import Modal from '../../components/UI/Modal/Modal.js';
import OrderSumarry from '../../components/Burger/Ordersummary/Ordersummary.js';

const INGEDIENT_PRICE={
    salad:1,
    cheese:2,
    meat:2,
    bacon:2
}

class BurgurBuilder extends Component{


    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchasable:false,
        purchasing:false
    };

    updatePurchasestate( ingredients){

const sum=Object.keys(ingredients).map(igkey=>{
    return ingredients[igkey];
}).reduce((sum,el)=>{
    return sum+el;
   },0);
   this.setState({purchasable:sum>0});
}   

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
       this.updatePurchasestate(updatedIngredients);
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
      this.updatePurchasestate(updatedIngredients);
   }

      purchaseHandler=()=>{
          this.setState({purchasing:true});
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
            <Aux >
                <Modal show={this.state.purchasing}>
                    <OrderSumarry ingredients={this.state.ingredients} />
                </Modal>

                <Burger ingredients={this.state.ingredients}/>
               <BuildControls 
               ingredientAdded={this.addIngredingHandler}
              ingredinetRemoved={this.removeIngredientHandler} 
               disabled={disableinfo}
         purchasable={this.state.purchasable}
         ordered={this.purchaseHandler}
         price={this.state.totalPrice}

             />
            </Aux>
        )
    }
}

export default BurgurBuilder;