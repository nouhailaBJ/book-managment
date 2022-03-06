import { GET_FAQS } from "../actions/faqs.actions"

const initialState = []
export default function faqsReducer(state = initialState, action){
    switch(action.type)
    {
        case GET_FAQS:
            return action.payload
        default:
            return state
    }
}