
import React from 'react'
import styled from 'styled-components'

const Error404 = () => {
  return (
    <Wrapper>
    <div style={{fontSize:'5rem', textAlign:'center',color:'pink'}}>Error404</div>
    <div style={{fontSize:'5rem', textAlign:'center',color:'pink'}}>Page Not Found</div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
background:#fff;
`

export default Error404