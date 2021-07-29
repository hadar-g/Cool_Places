import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './components/Home';




function App() {


  return (
    <div className = "app">
      <Router>
        <div className = "navbar">
        <Link to = "/">Home</Link>  
        <button>Show form</button>
        </div>
        <Switch>
            <Route path = "/" exact component = {Home} />
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
