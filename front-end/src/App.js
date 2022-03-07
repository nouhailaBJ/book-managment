import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import { UidContext } from './components/AppContext';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import axios from "axios"
import { getUser} from "./actions/user.action"
import RouterComp from "./routers/index"
import { GetFaqs } from "./actions/faqs.actions";
import { GetCities } from "./actions/cities.actions";
import { GetRestaurants } from "./actions/restaurant.action";

function App() {
  const [uid, setuid] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/jwtid`,
        withCredentials: true,
      }).then((res) => {
        setuid(res.data)
      }).catch((err) => console.log("No Token"))
    }
    fetchToken()
    dispatch(GetFaqs())
    dispatch(GetCities())
    dispatch(GetRestaurants())
    // update the data in our store
    if (uid)
      dispatch(getUser(uid))
  }, [uid])
  return (
    <UidContext.Provider value={uid}>
    <div className="App">
      <Header />
      <div className="main-content-area clearfix">
        <RouterComp />
      </div>
      <Footer />
    </div>
    </UidContext.Provider> 
  );
}

export default App;
