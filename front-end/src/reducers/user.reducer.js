import { GET_USER, UPDATE_USER, UPDATE_AVATAR} from "../actions/user.action"

const initialState = {}
export default function userReducer(state = initialState, action)
{
    switch(action.type){
        case GET_USER:
                return action.payload
        case UPDATE_USER:
            return {...state, ...action.payload}
        case UPDATE_AVATAR:
            return {
                ...state,
                avatar: action.payload
            }
        default:
            return state
    }
}