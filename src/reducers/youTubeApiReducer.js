import { COUNT_VIEWS_DATA_SUCCESS } from "../actions/viewsAc"


const initialState = {
    views: []
}

const youTubeReducer = (state = initialState, action ) => {
   
    switch(action.type){
        case COUNT_VIEWS_DATA_SUCCESS: 
            return {
                ...state, views:  action.views
            }
        default:
            return state
    }
}

export default youTubeReducer