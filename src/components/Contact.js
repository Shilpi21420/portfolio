import React, { useState } from "react";
import vg from "../assets/vg.png";
import { motion } from "framer-motion";
import toast from "react-hot-toast"; // toast is used as advance version or in proper styling to alert some message
import axios from "axios";
// Whenever we are using toast in any component then we have to import and used the Toater in App component for getting the result

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(name,email,message);
    setDisableBtn(true);

    const details = {
      name: name,
      email: email,
      message: message,
    };
    // console.log(details);

    let uid = email.replace(".", "");
    const response = await axios.post(
      `https://portfolio-624a0-default-rtdb.firebaseio.com/user/${uid}.json`,
      details
    );
    if (response.status === 200) {
      toast.success("Message Sent");
      setName("");
      setEmail("");
      setMessage("");
      setDisableBtn(false)
     
    }
  };

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
    <div id="contact">
      <section>
      <motion.form onSubmit={submitHandler} {...animation.form}>
          <h2>Contact Me</h2>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
          />

          <motion.button
            disabled={disableBtn}
            className={disableBtn ?"disableBtn ": ""}
            type="submit"
            {...animation.button}
          >
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="Graphic" />
      </aside>
    </div>
  );
}

export default Contact;

