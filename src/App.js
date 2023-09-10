import logo from './logo.svg';
import Answers from './components/answer';
import Question from './components/questions';
import './App.css';
import { Button } from './components/Button';
import { useState } from 'react';
import Test from './components/Test';
import List from './List'
import Test_set from './content';

function App() {
  const Prob=Test_set.poblemset1;
  return (
    <>
   <Test data={Prob}/>
    </>
  );
}

export default App;
