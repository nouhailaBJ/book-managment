import { DELETE_RESTAURANT, UPDATE_RESTAURANT, CREATE_RESTAURANT,GET_RETAURANTS  } from "../actions/restaurant.action"


const initialState = {}
export default function restaurantReducer(state = initialState, action)
{
    switch(action.type){
        case GET_RETAURANTS:
            return action.payload
        case CREATE_RESTAURANT:
            return [...state, action.payload]
        case UPDATE_RESTAURANT:
            return state.map((restaurant) => {
                if (restaurant.id == action.payload.id){
                    return {
                        ...restaurant, ...action.payload
                    }
                }
                else{
                    return restaurant;
                }
            })
        case DELETE_RESTAURANT:
            return state.filter(({id}) => id != action.payload.id)

        default:
            return state
    }
}