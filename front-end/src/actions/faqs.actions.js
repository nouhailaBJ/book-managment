import axios from "axios"

export const GET_FAQS = "GET_FAQS"


export const GetFaqs = () => {
    return async (dispatch) => {
        try{
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/faqs`)
            dispatch({type: GET_FAQS, payload: res.data})
        }catch (err){
            return console.log(err)
        }
    }
}