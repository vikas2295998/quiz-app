import React from 'react'
import Answers from './answer'
import Question from './questions'
import { useState } from 'react';
import List from '../List';
import { Button } from './Button';
import styled from 'styled-components';




const Test=(prop)=> {

    const Prob=prop.data;
    // const questions=Prob.questions;
    // const answers=Prob.answers;
    // const curr_ans="third answer";
    const [completed,start]=useState(false);
    const [arr,update]=useState([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);
    const [S_no,set_ind]=useState(0);
    const [score,increase]=useState(0);
    let elem=Prob.prob[S_no];
    const goind=(val)=>{
      set_ind(val);
    }
    const change_ind=(val)=>{
      if(S_no+val<0)
      set_ind(0);
      else if((S_no+val)==20)
      set_ind(19);
      else
      set_ind(S_no+val);
  
    }
  
    const new_score=(ind,val)=>{
      let arrnew=[...arr];
      arrnew[ind]=val;
      update(arrnew);
     
      // console.log(Prob);
    }
  let ans=0;
    const calculate=()=>{
      start(true);
      Prob.prob.map((e,i)=>{
        if(arr[i]!=-1){
          
          if(e.answer[arr[i]]===e.curr_ans){
            console.log(e.answer[arr[i]],e.curr_ans);
            ans++;
            increase(ans);
            console.log(ans);
          }
            
        }
        
      });
    }
    const restart=()=>{
      set_ind(0);
      start(false);
      update([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1])
    }
    



    return (
        <Wrapper>
       
          <h1>{prop.data.title}</h1>
          {completed==true&&<h2>your score is:{score}</h2>}
    
          <List list={arr} goind={goind} prob={prop.data.prob} isComp={completed}/>
         
          <Question num={S_no} ques={elem.question} />
          <Answers ans={elem.answer} curr_ans={elem.curr_ans} index={S_no} score={new_score} change_ind={change_ind} current={arr[S_no]} isComp={completed}/>
          {
            completed==false?
          <Button onClick={calculate} >Final Submit</Button>
         : <Button onClick={restart} >Restart</Button>
    }
        
        </Wrapper>
      );
}

const Wrapper=styled.section`

    text-align: center;
    // min-height: 100vh;
    
  
  h2{
    position: absolute;
    right:2rem;
    top:10rem;
    text-align: right;
    padding-right: 5rem;
    color: #cabcbc;
    text-shadow: 1px 1px red;
    
  }
  h1{
    color: #fff;
    text-shadow: 1px 1px red;
    padding-top: 1rem;
    font-size:2rem;
  }
  
  .btn{
    
    background-color: rgb(172, 11, 11);
    color:black;
  }
 

`

export default Test;