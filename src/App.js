import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//style
import './App.css';

 //components
 import Home from './components/club/Home';
 import Soccer from './components/club/Soccer';
 import MainMenu from './components/club/MainMenu';
 import MenuBar from './components/club/MenuBar';


function App() {

  

  return (
    <div className="App">    
       
      <Router>
        <MainMenu/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/soccer" exact component={Soccer} />
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
