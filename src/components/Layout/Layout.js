import React from 'react';
import Aux from '../../hoc/Auxhoc.js';
import classes from './Layout.css';
const layout=( props)=>(
<Aux>
    <div>toolbar ,side deawer ,backdrop</div>  

        <main className={classes.Content}>
        {props.children}
        </main>
    </Aux>
);
export default layout;