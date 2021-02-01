import React from 'react'
import Rainbow from '../hoc/Rainbow'

const Contact = (props) => {
  return (
    <div>
      <div className="container">
        <h4 className="center">Contact</h4>
          I am free to contribute. Do reach me out on following links. 
          <p align="left">
            <a href="https://twitter.com/MehulKChaudhari" target="_blank"><img height="50" src="https://img.icons8.com/fluent/96/000000/twitter.png"></img></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/mehul-chaudhari-3367b6174/" target="_blank"><img height="50"  src="https://img.icons8.com/fluent/96/000000/linkedin.png"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
            <a href="https://github.com/MehulKChaudhari" target="_blank"><img height="50" src="https://img.icons8.com/nolan/96/github.png"/></a>
          </p>

          <p>
            <a href="https://mehul-chaudhari.netlify.app/">🌐 Check out my website</a></p> 
          </div>
      </div>
  )
}

export default Rainbow(Contact)