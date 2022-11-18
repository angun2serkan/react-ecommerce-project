// here we are define all the application level states and define actions to make the changes to the state

import React from 'react'

export const initialState = {
    basket: [],
}

const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket: [...state.basket, action.item],
            }
    }
}

export default reducer