

import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo.js';
import Navigationitems from '../Navigationitems/Navigationitems.js';

const toolbar=(props)=>(
    <header className={classes.Toolbar}>
<div>menu</div>
<Logo />

<nav>
<Navigationitems/>

</nav>

    </header>

)



export default toolbar;