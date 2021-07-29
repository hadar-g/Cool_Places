import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './components/Home';
import Search from './components/Search';




function App() {


  return (
    <div className = "app">
      <Router>
        <div className = "navbar">
        <Link to = "/">Home</Link>  
        <h1>Cool Places</h1>
        </div>
        <Switch>
            <Route path = "/" exact component = {Home} />
            <Route path = "/search" exact component = {Search} />
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
