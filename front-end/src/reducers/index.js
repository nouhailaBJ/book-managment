import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import faqsReducer from "./faqs.reducer";
import cityReducer from "./city.reducer";
import restaurantReducer from "./restaurant.reducer";

export default combineReducers({
  userReducer,
  faqsReducer,
  cityReducer,
  restaurantReducer
});
