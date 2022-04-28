import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import './'
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";

import Payment from "./Payment";


function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
 //will only run once during componnets load
  auth.onAuthStateChanged(authUser => {
    console.log('The User is >>>', authUser)

    if(authUser){
      dispatch({
        type: 'SET_USER',
        user: authUser
      })
    }
    else{
     dispatch({
       type: 'SET_USER',
       user: null
     })
    }
  })
  },[])
  return (
    <Router>
    <div className="app">
      
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/checkout" element={[<Header />, <Checkout />]}/>
        <Route path="/" element={[<Header />, <Home />]}/>
        <Route path = "/payment" element = {[<Header/>,<Payment/>,<h1></h1>
        ]}>
          
        </Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
