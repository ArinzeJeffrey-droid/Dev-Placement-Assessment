import { 
    GET_ALL_USERS, 
    FETCH_FAILED, 
    CLEAR_ERRORS, 
    IS_LOADING, 
    NOT_LOADING, 
    SET_API_URL, 
    SET_HEADER_TITLE_FEMALE, 
    SET_HEADER_TITLE_MALE, 
    SET_DEFAULT_HEADER_TITLE, 
    SHOW_DISPLAY, 
    HIDE_DISPLAY,
} from "../../constants/action.types"

const INITIAL_STATE = {
    users: [],
    api_url: "",
    error: false,
    header_title: "All Users",
    loading: false,
    display: false,
    user_profile: {},
    no_results: false
}

const userReducer =  (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            }
        case SET_API_URL:
            return {
                ...state,
                api_url: action.payload
            }
        case IS_LOADING:
            return {
                ...state,
                loading: true
            }
        case NOT_LOADING:
            return {
                ...state,
                loading: false
            }
        case FETCH_FAILED:
            return {
                ...state,
                error: true
            } 
        case CLEAR_ERRORS:
            return {
                ...state,
                error: false
            }
        case SET_HEADER_TITLE_FEMALE:
            return {
                ...state,
                header_title: "Female Users"
            }
        case SET_HEADER_TITLE_MALE:
            return {
                ...state,
                header_title: "Male Users"
            }
        case SET_DEFAULT_HEADER_TITLE:
            return {
                ...state,
                header_title: "All Users"
            }
        case SHOW_DISPLAY:
            return {
                ...state,
                display: true,
                user_profile: action.payload
            }
        case HIDE_DISPLAY:
            return {
                ...state,
                display: false,
                user_profile: {}
            }
        default:
            return state
    }
}

export default userReducer