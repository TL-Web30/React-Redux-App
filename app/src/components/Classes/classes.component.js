import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getClasses } from '../../store/actions/classAction';
import ClassItem from '../Class/class.component';
import './classes.styles.scss';


const Classes = ({ classes, isFetching, error, getClasses }) => {
        
    useEffect(() => {
        getClasses()
        console.log('console log in useEffect', classes)
    }, [])


    return (
         <div className='classes-preview'>
           <h1 className='title'>Classes</h1> 
           <div className='preview'>
            {classes ? (
                classes
                .map(({id, ...otherClassProps}) => (
                    <ClassItem key={id} {...otherClassProps} />
                ))
            ): (<p>still fetching</p>)}
            </div>
        </div> 
    )
}

const mapStateToProps = state => {
    return {
        classes: state.classReducer.classes,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getClasses }) (Classes);