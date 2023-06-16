import React from 'react'
import me from '../assets/me.jpeg';
import {
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineArrowUp,
  } from "react-icons/ai";

function Footer() {
  return (
   <footer>
    <div>
        <img src={me} alt='Shilpi_pic' />
        <h2>Shilpi Kumari</h2>
        <p>To obtain a responsible position as a Frontend Developer in an innovative 
            environment where I could invest my knowledge and upskill myself taking
            up new challenges and building best solutions.
        </p>
    </div>
    <aside>
        <h2>Social Media</h2>
        <article>
            <a href='https://github.com/Shilpi21420' target={"blank"}><AiFillGithub /></a>
        </article>
        <article>
            <a href='https://www.linkedin.com/in/s4shilpi' target={"blank"}><AiFillLinkedin /></a>
        </article>

    </aside>
    <a href='#home'> <AiOutlineArrowUp /></a>
   </footer>
  )
}

export default Footer
