 

import React from 'react';
import classes from './Navigationitems.css';
import Navigationitem from './Navigationitem/Navigationitem.js';


const navigationitems = ()=>(
 
 <ul className={classes.Navigationitems}>
     <Navigationitem link="/" active > Burgur builder</Navigationitem>
     <Navigationitem link ="/" > checkout </Navigationitem>
     
 </ul>
    
);

export default navigationitems;