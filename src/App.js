import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import BlogDetail from './components/BlogDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
          <Route exact path="/"> 
          {/* for all the route cases the react will pick the first match always so if we haven't use exact eighter we have more to the path it will stop on first match */}
              <Home />
            </Route>
            <Route exact path="/create">
              <Create/>
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetail></BlogDetail>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
