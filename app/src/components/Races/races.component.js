import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRaces } from '../../store/actions/racesAction';
import RaceItem from '../Race-Item/race-item.components';

import './races.styles.scss';

const Races = props => {
    const {races, getRaces} = props;

    useEffect(() => {
        getRaces();
        console.log('im the races in useEffect', races)
    }, [])
    return(
        <div className='races'>
            <h1 className='title'>Races</h1>
            <div className='preview'>
            {races ? (
                races.map((race, idx) => (
                    <RaceItem key={idx} name={race.name} />
                ))
            ) : (<p>still fetching races...</p>)
            }
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        races: state.racesReducer.races,
        isFetching: state.racesReducer.isFetching,
        error: state.racesReducer.error
    }
}

export default connect(mapStateToProps, {getRaces}) (Races);