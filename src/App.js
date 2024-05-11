import logo from './logo.svg';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Answers from './components/answer';
import Question from './components/questions';
import './App.css';
import { Button } from './components/Button';
import { useState } from 'react';
import Test from './components/Test';
import List from './List'
import Test_set from './content';
import Error404 from './components/Error404';
import Test_comp from './components/Test_comp';
import Home from './Home';
import Header from './components/Header';
// import { useLocation } from 'react-router-dom';
function App() {
 
  // const location = useLocation();
  // const state = location.state;
  // console.log(state);
  return (
    <BrowserRouter>
   
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/test" element={<Test />}></Route>
    <Route path="*" element={<Error404/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
