

import React from 'react';
 import Logoimg from '../../asserts/images/burger-logo.png';
 import classes from './Logo.css';
const logo=()=>(
 <div className={classes.Logo}>
        <img src={Logoimg} alt="logo" />
    </div>
)

export default logo;