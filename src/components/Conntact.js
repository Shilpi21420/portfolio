import React from "react";
import vg from "../assets/vg.png";
import { motion } from "framer-motion";

function Conntact() {
  const animation = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <>
      <div id="contact">
        <section>
          <motion.form
            action="https://formspree.io/f/mzbqlgoo"
            method="post"
            {...animation.form}
          >
            <h2>Contact Me</h2>

            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <input
              type="text"
              name="message"
              placeholder="Your Message"
              required
            />
            <motion.button type="submit" {...animation.button}>
              Send
            </motion.button>
          </motion.form>
        </section>
        <aside>
          <img src={vg} alt="Graphic" />
        </aside>
      </div>
    </>
  );
}

export default Conntact;
