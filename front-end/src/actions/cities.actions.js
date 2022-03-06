import axios from "axios"

export const GET_CITIES = "GET_CITIES"


export const GetCities = () => {
    return async (dispatch) => {
        try{
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/city`)
            dispatch({type: GET_CITIES, payload: res.data})
        }catch (err){
            return console.log(err)
        }
    }
}