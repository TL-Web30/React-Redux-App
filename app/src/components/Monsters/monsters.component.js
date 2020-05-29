import React, { useState, useEffect } from 'react';
import {connect } from 'react-redux';
import { getMonsters } from '../../store/actions/monsterActions';
import MonsterItem from '../monster-item/monster-item.component';
import Pagination from '../pagination/pagination.component';
import {SearchBox} from '../searchBox/searchBox.component';

import './monsters.styles.scss';

const Monsters = props => {
    const { monsters, getMonsters, monstersPerPage} = props;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchField, setSearchField] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        getMonsters()  
        const results = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())) 
            setSearchResults(results)   
    },[searchField])

    //get current posts
    const indexOfLastMonster = currentPage * monstersPerPage;
    const indexOfFirstMonster = indexOfLastMonster - monstersPerPage;
    const currentMonsters = monsters.slice(indexOfFirstMonster, indexOfLastMonster);
   
    //change page
   const paginate = pageNumber => setCurrentPage(pageNumber);

   //searchFunction
   const handleChange = (e) => {
       setSearchField(
            e.target.value
       )
       console.log(searchField)
   };

//    const filteredMonsters = monsters.filter(monster =>
//        monster.name.toLowerCase().includes(searchField.toLowerCase())
//    );

    return(
        <div className="monsters-preview">
            <h1 className='title'>Monsters</h1>
            <SearchBox 
            placeholder='Search Monsters'
            handleChange={handleChange}
            />
            <div className='preview'> 
            {
                searchResults.length ? (
                    searchResults.map((monster, idx) => (
                        <MonsterItem key={idx} name={monster.name}/> 
                    ))
                ) : (
                    currentMonsters.map((monster, idx) => (
                        <MonsterItem key={idx} name={monster.name}/> 
                    ))
                )
            }    
            
            </div> 
            <nav>
                { monsters ? (
                <Pagination monstersPerPage={monstersPerPage} 
                totalMonsters={monsters.length} paginate={paginate}/>
                ) : (<p>no pages</p>)
            }
            </nav>  
                  
        </div>
    )
};

const mapStateToProps = state => {   
    return {
        monsters: state.monstersReducer.monsters,
        isFetching: state.monstersReducer.isFetching,
       
        monstersPerPage: state.monstersReducer.monstersPerPage,
        error: state.monstersReducer.error
    }
}

export default connect(mapStateToProps, {getMonsters})(Monsters);