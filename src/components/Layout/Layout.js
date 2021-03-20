import React from 'react';
import Aux from '../../hoc/Auxhoc.js';
import classes from './Layout.css';
const layout=( props)=>(
    
<Aux className={classes.Layout}>
    
    <div className={classes.toolbar}>toolbar ,side drawer ,backdrop</div>  

        <main className={classes.Content}>
        {props.children}
        </main>
        

    </Aux>
);
export default layout;