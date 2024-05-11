import React from 'react'
import styled from 'styled-components'
import Test_comp from './components/Test_comp'
import Test_set from './content';
const Home = () => {
  // const Prob=Test_set.poblemset1;
  return (
    <Wrapper>
        <h1 className='title'>MCQ TEST QUIZ APP</h1>
        <div className='tests'>{
          Test_set.map((e,i)=><Test_comp data={e} ind={i}/>)
        }
        {/* <Test_comp/><Test_comp/><Test_comp/><Test_comp/><Test_comp/><Test_comp/> */}
        </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
width:100vw;
min-height:100vh;
display:flex;
justify-content:space-around;
align-items:center;
flex-direction:column;
background:#fff;
.title{
  // background:black;
  color:rgb(54, 52, 52);
  // text-shadow:.1rem .1rem .1rem  grey;
  color:rgb(105, 103, 103);
  font-family:Arial;
  font-weight:750;
  // margin-top:3rem;
}
.tests{
width:90%;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;

}
`
export default Home;