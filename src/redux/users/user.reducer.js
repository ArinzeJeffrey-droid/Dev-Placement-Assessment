import { GET_ALL_USERS } from "../../constants/action.types"

const INITIAL_STATE = {
    users: null,
    error: null
}

const userReducer =  (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}

export default userReducer