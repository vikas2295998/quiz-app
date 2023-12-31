import styled from "styled-components";

const Question=(prop)=>{
  
    return <Wrapper>
          <div id='q'>{prop.num+1 }. {prop.ques}</div>
    </Wrapper>;
}

const Wrapper=styled.section`

margin:2rem 0rem;
#q{
   text-align:left;
   color: #cabcbc;
   font-size:1.5rem;
   font-weight: 400;
   text-shadow: 1px 1px 1px black;
   margin:1vh 10vw;
}

@media (max-width: 500px) {
    #q{
        font-size:1rem;
    }
  }

`
export default Question;