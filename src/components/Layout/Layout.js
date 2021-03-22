import React from 'react';
import Aux from '../../hoc/Auxhoc.js';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.js';


const layout=( props)=>(
    
    <Aux className={classes.Layout}>
        
        <Toolbar/>
        <main className={classes.Content}>
        {props.children}
        </main>
        

    </Aux>
);
export default layout;