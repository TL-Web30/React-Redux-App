import React from 'react';

const Pagination = ({ monstersPerPage, totalMonsters, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalMonsters / monstersPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        
            <div className='pagination'>
                {
                    pageNumbers.map(number => (
                        <span key={number} className='page-item'>
                            <span onClick={() => paginate(number)} 
                                className="page-link">{number}</span>
                        </span>
                    ))
                }
            </div>

        
    )
};

export default Pagination;