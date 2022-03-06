import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import faqsReducer from "./faqs.reducer";
import cityReducer from "./city.reducer";

export default combineReducers({
  userReducer,
  faqsReducer,
  cityReducer
});
