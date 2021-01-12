import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Header from "./Header"

function App(){
  return(
    <Router>
      <div className="App">
        <switch>
          <Route path="/">
            <Header/>
          </Route>
        </switch>
      </div> 
    </Router>
  );
}

export default App;
