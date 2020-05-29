import React from 'react';
import image from '../../assets/images/race.jpg';
import './race-item.styles.scss';

const RaceItem = ({ id, name }) => (
    <div className='race-item'>
        <div className='image'
        style={{
            backgroundImage: `url(${image})`
        }}/>
        <div className='race-footer'>
            <span className='name'>{name}</span>
        </div>
    </div>
);

export default RaceItem;