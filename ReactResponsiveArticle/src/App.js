import React from "react";
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

//All imported pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Article from "./Pages/Article";

//Importing Navbar pages
import Navebar from "./Components/Navebar";

//Importing CSS file
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navebar/>
    <div className='center'>
        <Switch>
          <Route exact path='/'>
              <Home/>
          </Route>
          <Route path='/about'>
                <About/>
          </Route>
          <Route path='/contact'>
              <Contact/>
          </Route>
          <Route path='/articles/:id'>
              <Article/>
          </Route>
          <Route path='*'>
              <Redirect to='/'/>
          </Route>
        </Switch>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
