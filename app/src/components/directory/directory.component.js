import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { connect } from 'react-redux';

const Directory = props => {
console.log(props)
        return(
            <div className="directory-menu">                
               {
                   props.sections.map(({id, ...otherSectionProps}) => (
                       <MenuItem key={id} {...otherSectionProps}/>
                   ))
               } 
            </div>
        )
}

const mapStateToProps = state => {
    console.log('mstp', state)
    return{
        sections: state.directoryReducer.sections
    }
}

export default connect(mapStateToProps, {})(Directory);