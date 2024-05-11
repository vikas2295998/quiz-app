import React, { useState } from 'react'
import { styled } from 'styled-components';

const List = (prop) => {
  return (
    <Wrapper>
        {
        prop.list.map((e,i)=>{
            const submitt = () => {
                prop.goind(i);
              };
            if(prop.isComp && e!=-1){
                return React.createElement("span", { key: i ,className:prop.prob[i].curr_ans==prop.prob[i].answer[e]?"currect" :"uncurrect",onClick:submitt}, i+1);
            }
            let child= React.createElement("span", { key: i ,className:e==-1?"unsolved" :"solved",onClick:submitt}, i+1);
            // if(e==0)
            // child.classList.add('unsolved');
            // else if(e==1)
            // child.classList.add('solved');
            // else if(e==2)
            // child.classList.add('attempted');
            // else 
            // child.classList.add('wrong');
         
        return child;
        return <span>34</span>;
        })
        }
    </Wrapper>
  )
}

const Wrapper=styled.section`
width:90vw;
display:flex;
flex-wrap:wrap;
margin-left:5vw;
justify-content:flex-start;
span{
    margin:.25rem;
    color:white;
    font-weight:500;
    border:.1rem solid #fff;
    padding:.8rem;
    border-radius:10%;
    cursor:pointer;
    width:1rem;
    height:1rem;
  
}
.solved{
    background-color: greenyellow;
    color:black;
    border:2px solid #fff;
}
.unsolved{
    background-color: rgb(224, 78, 217);
}
.currect{
    background:green;
}
.uncurrect{
    background:red;
}

@media (max-width: 700px) {
    margin:5vw;
    width:90vw;
    span{
        margin:.25rem;
        color:white;
        font-weight:300;
        border:.1rem solid #fff;
        padding:.5rem;
        border-radius:10%;
        cursor:pointer;
        width:1rem;
        height:1rem;
    }
  }


`

export default List;