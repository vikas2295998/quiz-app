import styled from "styled-components";
import { useState } from "react";
import { Button } from "./Button";
const Answers=(prop)=>{
    const [val,setName]=useState(prop.current);
    const submit=(ind)=>{
        if(val!=-1){
            prop.score(prop.index,val);
        }
        prop.change_ind(ind);
        setName(-1);
    }
    return <Wrapper>
      <form id="form" onSubmit={submit}>
        {
        prop.ans.map((e,i)=>{
            let child= <lable className="custom-radio" id={i}><input className="radio" id={i} type="radio" name="i" checked={i==prop.current||i==val} onChange={()=>prop.isComp==false?setName(i):setName(val)}></input><span>{e}</span></lable>;
            return child;
        }
        )
}
</form>
{prop.isComp && <div className="answer"><span>currect anwer </span>{prop.curr_ans}</div>}
<span className="button">
<Button onClick={()=>submit(1)} >next</Button>
<Button onClick={()=>submit(-1)} >back</Button>
</span>    
    </Wrapper>;
}
const Wrapper=styled.section`

margin:2vh 10vw;
display:flex;
flex-direction:column;
align-items: flex-start;
.button{
    width:min(80vh,80vw);
    display:flex;
    justify-content:space-around;
}
.radio{
    color:red;
    width:2rem;
}
.answer{
    margin-top:1rem;
    color:#fff;
    font-size:1.2rem;
    font-weight:300;
}
.answer span{
    color:rgb(118, 183, 6);
}

#form{

display:flex;
width:min(80vh,80vw);

justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
background:black;
background-color:rgb(45, 33, 33);
font-size:1.2rem;
}
lable{
    padding:1rem 1.4rem;
    color:green;
    color:rgb(222, 156, 156)
}
Button{
    margin:1.2rem;
}
/* Style the label for the radio button */
.custom-radio {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 10px; /* Add some spacing between radio buttons */
}

/* Customize the appearance of the radio button */
.custom-radio input[type="radio"] {
    transform: scale(1.5); /* Adjust the scale factor as needed */
    margin-right: 5px; /* Add spacing between the button and text */
}

/* Style the radio button when it's checked */
.custom-radio input[type="radio"]:checked + span {
    font-weight: 540; /* Example: change font weight when checked */
    color: #007bff; /* Example: change text color when checked */
    /* Add more styles as needed */
}

@media (max-width: 500px) {
    #form{
        font-size:1rem;
    }
    lable{
    padding:.5rem .7rem;
    }
  }

`


export default Answers;