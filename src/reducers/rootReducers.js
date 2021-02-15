import { combineReducers } from "redux";
import youTubeReducer from "./youTubeApiReducer";


const rootReducer = combineReducers({
    viewCount: youTubeReducer
})

export default rootReducer