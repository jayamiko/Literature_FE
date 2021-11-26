// Import React
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./Context/AuthContextProvider";

// Import Admin Page
import AdminPage from './Pages/AdminPage/AdminPage';
import PrivateRoute from "./Components/PrivateRoutes/PrivateRoutes";

// Import User Pages
import Landing from './Pages/Landing/Landing';
import SearchPage from './Pages/SearchPage/SearchPage';
import Home from './Pages/Home'
import Profile from "./Pages/Profile/Profile";

// Import Style
import './App.css';

// Import API
import { API, setAuthToken } from "./config/api";

// init token on axios every time the app is refreshed
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {

  const { dispatch } = useContext(AuthContext);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      if (response.status !== 200) {
        dispatch({
          type: "AUTH_ERROR",
        });
      }

      let payload = response.data.data.user;
      payload.token = localStorage.token;
      dispatch({
        type: "AUTH_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "AUTH_ERROR",
      });
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/search-page" component={SearchPage} />
        <Route exact path="/profile" component={Profile} />

        {/* Admin Page */}
        <PrivateRoute exact path="/admin-page" component={AdminPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
