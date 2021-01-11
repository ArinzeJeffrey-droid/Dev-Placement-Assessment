import { GET_ALL_USERS, FETCH_FAILED, IS_LOADING, NOT_LOADING, SET_API_URL, SET_HEADER_TITLE_MALE, SET_HEADER_TITLE_FEMALE, SET_DEFAULT_HEADER_TITLE } from '../constants/action.types'
import axios from "axios"
import process from "../env"

const URL = process.env.API_URL

/**
 * Get Page Number for paginatiomn.
 * @param {interger} page_num - Used to query the Api for data results.
 */


export const getAllUsers = (page_num) => {
    return async(dispatch) => {
        try {
            //Change UI Header title e.g All Users, Female Users, Male Users
            dispatch({ type: SET_DEFAULT_HEADER_TITLE})
            //storing api request URL to redux state
            let api_url = `${URL}?page=1&results=3&exc=login`
            if(page_num){
                api_url = `${URL}?page=${page_num}&results=3&exc=login`
            }
            dispatch({ type: SET_API_URL, payload: api_url})
            //Sets loading state to true to display lazy load animation
            dispatch({type: IS_LOADING})
            const res = await axios.get(api_url)
            dispatch({
                type: GET_ALL_USERS,
                payload: res.data.results
            })
            //sets loading state to false on successfull data fetch
            dispatch({type: NOT_LOADING})
        } catch (error) {
            dispatch({type: NOT_LOADING})
            dispatch({
                type: FETCH_FAILED
            })
        }
    }
}

export const getAllUsersFemale = (page_num) => {
    return async(dispatch) => {
        try {
            //Change UI Header title e.g All Users, Female Users, Male Users
            dispatch({ type: SET_HEADER_TITLE_FEMALE})
            //storing api request URL to redux state
            let api_url = `${URL}?gender=female&page=1&results=3&exc=login`
            if(page_num){
                api_url = `${URL}?gender=female&page=${page_num}&results=3&exc=login`
            }
            dispatch({ type: SET_API_URL, payload: api_url})
            //Sets loading state to true to display lazy load animation
            dispatch({type: IS_LOADING})
            const res = await axios.get(api_url)
            dispatch({
                type: GET_ALL_USERS,
                payload: res.data.results
            })
            //sets loading state to false on successfull data fetch
            dispatch({type: NOT_LOADING})
        } catch (error) {
            dispatch({type: NOT_LOADING})
            dispatch({
                type: FETCH_FAILED
            })
        }
    }
}

export const getAllUsersMale = (page_num) => {
    return async(dispatch) => {
        try {
            //Change UI Header title e.g All Users, Female Users, Male Users
            dispatch({ type: SET_HEADER_TITLE_MALE})
            //storing api request URL to redux state
            let api_url = `${URL}?gender=male&page=1&results=3&exc=login`
            if(page_num){
                api_url = `${URL}?gender=male&page=${page_num}&results=3&exc=login`
            }
            dispatch({ type: SET_API_URL, payload: api_url})
            //Sets loading state to true to display lazy load animation
            dispatch({type: IS_LOADING})
            const res = await axios.get(api_url)
            dispatch({
                type: GET_ALL_USERS,
                payload: res.data.results
            })
            //sets loading state to false on successfull data fetch
            dispatch({type: NOT_LOADING})
        } catch (error) {
            dispatch({type: NOT_LOADING})
            dispatch({
                type: FETCH_FAILED
            })
        }
    }
}




export const retryCurrentRequest = (url) => {
    return async(dispatch) => {
        try {
            //storing api request URL to redux state
            const api_url = url
            dispatch({ type: SET_API_URL, payload: api_url})
            //Sets loading state to true to display lazy load animation
            dispatch({type: IS_LOADING})
            const res = await axios.get(api_url)
            dispatch({
                type: GET_ALL_USERS,
                payload: res.data.results
            })
            //sets loading state to false on successfull data fetch
            dispatch({type: NOT_LOADING})
        } catch (error) {
            dispatch({type: NOT_LOADING})
            dispatch({
                type: FETCH_FAILED
            })
        }
    }
}