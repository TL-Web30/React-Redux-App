import React from "react";
import image from '../../assets/images/class.png';
import './class.styles.scss';

const ClassItem = ({id, name }) => (
     <div className='class-item' >
        <div className='image' 
        style={{ backgroundImage: `url(${image})`}}/>
            <div className='class-footer'>
                <span className='name'>{name}</span>                
            </div>
    </div>
);

export default ClassItem;