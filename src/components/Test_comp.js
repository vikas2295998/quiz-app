import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import imge1 from '../img/image1.jpg'
import imge2 from '../img/image2.jpg'
import imge3 from '../img/image3.jpg'
import imge4 from '../img/image4.jpg'
import imge5 from '../img/image5.jpg'
import imge6 from '../img/image6.jpg'
// import imgs from '../img'
import {FaPlay, FaHome, FaRegHeart } from 'react-icons/fa';

const arr=[imge1,imge2,imge3,imge4,imge5,imge6];
const Test_comp = (props) => {
// console.log(imgs);
let ind =Math.floor(Math.random()*props.data.prob.length);
const images={img1:imge1,img2:imge2,img3:imge3};
  return (
    <Wrapper>
        <div className='upper' style={{ backgroundImage:`url(${arr[props.ind]})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover', }}>
          <h1>{props.data.title}</h1>
        </div>
        <div className='lower'>
            <span className="text"><span>{props.data.prob.length}</span> tests</span>
            <Link to='./test' state={{title:props.data.title,probs:props.data.prob[ind],ind:ind+1,display:true}}><div className='btn'><FaPlay/></div></Link>
        </div>
        
    </Wrapper>
  )
}

const Wrapper=styled.section`
// width:20rem;
// height:18rem;
background:white;
margin:2rem;
padding:.2rem;
border-radius:10px;
border:3px solid #fff;
box-shadow:.1rem .1rem 1rem black;
.upper{
    height:12rem;
    width:15rem;
    padding:20px;
    border:3px solid red;
    border-radius:10px;
    
  
}
.upper h1{
  color:#fff;
  font-family:Georgia, 'Times New Roman', Times, serif;
  text-shadow:1px 1px  black,-1px -1px  black,-1px 1px  black,1px -1px  black;
  letter-spacing: 1px;
}
.lower{
  margin-top:.5rem;
  height:3rem;
  display:flex;
  justify-content:space-around;
  align-items:center;
}
.text{
  font-size:1.4rem;
  font-weight:800;
  font-family: serif;
  color:grey;
  
}
.text span{
  color: rgb(244, 47, 47);
}
.btn{
  width:1.5rem;
  height:1.5rem;
  // padding:1rem;
  pointer:cursor;
  border:.3rem solid grey;
  border-radius:50%;
  display:grid;
  place-content:center;
  text-decoration:none;
  z-index:2;
  font-size:1.4rem;
  color:black;
  padding:.5rem;
}


`

export default Test_comp;