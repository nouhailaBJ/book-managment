import axios from "axios"

export const CREATE_RESTAURANT = "CREATE_RESTAURANT"
export const GET_RETAURANTS = "GET_RETAURANTS"
export const UPDATE_RESTAURANT = "UPDATE_RESTAURANT"
export const DELETE_RESTAURANT = "DELETE_RESTAURANT"

export const createRestaurant = (data) => {
    return async (dispatch) => {
        try{
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/restaurants/create`, data)
            dispatch({type: CREATE_RESTAURANT, payload: res.data})
        }catch(err) {
            return console.log(err)
        }
    }
}

export const GetRestaurants = () => {
    return async (dispatch) => {
        try{
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/restaurants`)
            dispatch({type: GET_RETAURANTS, payload: res.data})
        }catch(err) {
            return console.log(err)
        }
    }
}

export const updateRestaurant = (id, data) => {
    return async (dispatch) => {
        try{
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/restaurants/edit/${id}`, data)
            dispatch({type: UPDATE_RESTAURANT, payload: res.data})
        }catch(err) {
            return console.log(err)
        }
    }
}

export const deleteRestaurant = (id) => {
    return async (dispatch) => {
        try{
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/restaurants/delete/${id}`)
            dispatch({type: DELETE_RESTAURANT, payload: res.data})
        }catch(err) {
            return console.log(err)
        }
    }
}

export const findRestaurantById = (id) => {
    return async (dispatch) => {
        try{
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/restaurants/${id}`)
            dispatch({type: DELETE_RESTAURANT, payload: res.data})
        }catch(err) {
            return console.log(err)
        }
    }
}

