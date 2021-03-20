import React from 'react';
import classes from './Modal.css';
const modal=(props)=>(
    
     <div className={classes.Modal}
   style={{
       transform:props.show? 'translateY(0)' :'translatey(-100vh)',
       opacity: props.show ? '1':'3'
           }}  > 

     {props.children}

     </div>

)
export default modal;
