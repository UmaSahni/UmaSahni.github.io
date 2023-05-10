import { Button, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Intro = () => {
  return (
    <div id="about" className="about section" >
      
           <Heading  fontFamily={"Inter"} mt={"8"} mb={"8"} >About Me</Heading>

      <div className="nav-link about">
          <h1
          style={{fontSize : "55px",
          paddingBottom : "10px",
        }}
          >
           
          </h1>
          <h3 id="user-detail-name"  > Uma Sahni </h3>
        
          <Text id="user-detail-intro"   size={"2"}  style={{ letterSpacing: "1px", }}>
            An enthusiastic Mern Developer with excellent hands-on experience in
            developing scalable websites and application using a wide range of
            frontend and backend skills like HTML, CSS, JavaScript, React,
            Redux and Node Js. Highly skilled in design, development and
            implementation of functional specifications.

          </Text>
          
          <br/>
          <button  id="resume-button-2" style={{ marginTop: "5px" }}>
            <a
              href={"Uma_Sahni_Resume.pdf"}
              download
              id="resume-link-2"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1dRHZrEma-kfLiYj-j_McunCJfHseC3O3/view?usp=share_link"
                )
              }
            >
              <span>
                <i className="bx bx-download"></i>
              </span>
            <Button colorScheme='blue' variant='outline' > Resume </Button>
             
            </a>
          </button>
        </div>


     
    </div>
  )
}

export default Intro