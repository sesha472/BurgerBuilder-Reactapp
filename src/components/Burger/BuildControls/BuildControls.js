import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl.js';
const controls=[
    {label:"Salad", type:"salad"},
    {label:"Bacon", type:"bacon"},
    {label:"Cheese", type:"cheese"},
    {label:"Meat", type:"meat"},
]
const buildControls=(props)=>(
      <div className={classes.BuildControls}>
         <p>current price:<strong>{props.price.toFixed(2)}</strong></p>
             { controls.map(ctrl=>(
             <BuildControl
            key={ctrl.label}
              label={ctrl.label}
        //   the bellow calculation from 133 module
         added={()=>props.ingredientAdded(ctrl.type)} 
        removed={()=>props.ingredinetRemoved(ctrl.type)}
         disabled={props.disabled[ctrl.type]}
      
      />
  ))
}
      <button className={classes.OrderButton}
       disabled={!props.purchasable}
     onClick={props.ordered}
     >
          ordernow
  
  </button>

    </div>
);

export default buildControls;