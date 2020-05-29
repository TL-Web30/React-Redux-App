import {
  FETCH_SECTION_START,
FETCH_SECTION_SUCCESS,
FETCH_SECTION_FAIL
} from '../actions/directoryActions';

const section_data = [
    {
        title: 'classes',
        imageUrl: '/images/class.png',
        id: 1,
        linkUrl: 'classes'
      },
      {
        title: 'races',
        imageUrl: '/images/race.jpg',
        id: 2,
        linkUrl: 'races'
      },
      {
        title: 'equipment',
        imageUrl: '/images/equip.jpg',
        id: 3,
        linkUrl: 'equipment'
      },
      {
        title: 'spells',
        imageUrl: '/images/spells.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'spells'
      },
      {
        title: 'monsters',
        imageUrl: '/images/monster.jpeg',
        size: 'large',
        id: 5,
        linkUrl: 'monsters'
      }
]//ends section_data


const initialState ={
    sections: section_data,
    isFetching: false,
    error: ''
};

export const directoryReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_SECTION_START":
            return {
                ...state,
                isFetching: true
            };
        case "FETCH_SECTION_SUCCESS":
          return {
            sections: action.payload,
            isFetching: false
          }
        case "FETCH_SECTION_FAIL":
          return {
            ...state,
            sections: action.payload,
            isFetching: false,
            error: ""
          };
          
            default: 
    return state;
    } 
}