// Import React
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Import Admin Page
import AdminPage from './Pages/AdminPage/AdminPage';
import PrivateRoute from "./Components/PrivateRoutes/PrivateRoutes";

// Import User Pages
import Landing from './Pages/Landing/Landing';
import SearchPage from './Pages/SearchPage/SearchPage';

// Import Style
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/search-page" component={SearchPage} />
        <PrivateRoute exact path="/admin-page" component={AdminPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
