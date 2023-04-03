import { Container } from '@chakra-ui/react'
import React from 'react'

const Intro = () => {
  return (
    <div>
      <section className="about section" id="about">
        <div 
        className="about-img" 
     
        >
          <img 
          className="home-img"
           src={""} alt="home-image" 
        
          />
          </div>
           </section>
<div className="nav-link about">
          <h1
          style={{fontSize : "55px",
          paddingBottom : "10px",
        }}
          >
            About <span>Me</span>
          </h1>
          {/* <h2 id="user-detail-name">
            I'm <span>Neha Sahu</span> 
          </h2> */}

          {/* <h4>Mern Developer</h4> */}
          <p id="user-detail-intro" style={{ letterSpacing: "1px",fontSize:"22px" }}>
            An enthusiastic Mern Developer with excellent hands-on experience in
            developing scalable websites and application using a wide range of
            frontend and backend skills like HTML, CSS, JavaScript, React,
            Redux and Node Js. Highly skilled in design, development and
            implementation of functional specifications.
          </p>
          <br/>
          <button id="resume-button-2" style={{ marginTop: "5px" }}>
            <a
              href={""}
              download="pdf"
              id="resume-link-2"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1kkba3IRIWZ7W77s2AZ040myrHEOJVOmh/view?usp=share_link"
                )
              }
            >
              <span>
                <i className="bx bx-download"></i>
              </span>
              Resume
            </a>
          </button>
        </div>


      <Container>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere dolorum ab veniam, odio quos! Delectus consectetur explicabo, ad vel facilis eos reiciendis voluptatum dolorum quis perspiciatis culpa consequatur? Minus?
      </Container>
    </div>
  )
}

export default Intro