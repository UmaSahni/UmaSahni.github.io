import { Button, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Intro = () => {
  return (
    <div id="about" className="about section" >
      
           <Heading  fontFamily={"Inter"} mt={"4"} mb={"4"} >About Me</Heading>

      <div className="nav-link about">
          <h1
          style={{fontSize : "55px",
          paddingBottom : "10px",
        }}
          >
           
          </h1>
          <Heading id="user-detail-name"  > Hi &#x1F44B; I'm  Uma Sahni </Heading>
         <br/>
          <Container maxW='container.lg' >
          <Text id="user-detail-intro"   size={"2"}  style={{ letterSpacing: "1px", }}>
            An enthusiastic Mern Developer with excellent hands-on experience in
            developing scalable websites and application using a wide range of
            frontend and backend skills like <span fontWeight={"bold"} > HTML, CSS, JavaScript, React,
            Redux and Node Js. </span> Highly skilled in design, development and
            implementation of functional specifications.
          </Text>
          <br/>
<Text>
 Apart from coding I am also highly interested in creating illustrations and animations. I use Adobe illustrator to create illustrations. I have also sold some of my creativity to my clients on fiverr with 5 stars rating. I also have some understanding on creating animations. I use Adobe Character Animator and Adobe After Effects  to create animation which I use to publish on my YouTube Channel. 
</Text>

          </Container>
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