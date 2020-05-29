import React from "react";
import image from '../../assets/images/monster.jpeg';
import './monster-item.styles.scss';

const MonsterItem = ({name, idx}) => (  
   
      <div className='monster-item' key={idx}>      
        <div  className='image'
        style={{ backgroundImage: `url(${image})`}}/>
            <div className='monster-footer'>
                <span className='name'>{name}</span>                
            </div>   
         </div> 
)

export default MonsterItem;