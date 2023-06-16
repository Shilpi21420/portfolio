import React from "react";
import { motion } from "framer-motion"; // motion is used to provide an motion to any tag etc.
import TypeWriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";

function Home() {
  //motion styling initial for at starting how it show and whenever it reload the page the text will move on with the help of whileinmotion

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Shilpi Kumari 
          </motion.h1>

          {/* The typewriter effect, where text appears as if it’s being typed out letter by letter, 
                can add an engaging and dynamic element to your React.js applications. 
                It creates a visually appealing animation that grabs the user’s attention. */}
          <TypeWriter
            options={{
              strings: ["A Frontend Developer", "A Designer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:s4shilpi567@gmail.com">
              <button>Hire Me</button>
            </a>

            <a href="#work">
              {/* #work is used to scroll down to work section */}
              <button className="btn">
                Projects <BsArrowUpRight />
              </button>
            </a>
          </div>
          <div>
            <article data-special>
              {/* data-special is a attribute pass to the articles . for using extra css in that articles with the help of data-special arrtibute */}
              {/* <p>Contact</p>
              <span>s4shilpi567@gmail.com</span>
              <br/>
              <span>9148819751</span> */}
            </article>
          </div>
        </div>
      </section>

      <section>
        <img src={me} alt="Shilpi_Kumari_pic" />
      </section>
      <BsChevronDown />
    </div>
  );
}

export default Home;

