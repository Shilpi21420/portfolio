import React from "react";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div id="skills">
      <h2>Skills</h2>
      <section>
        <motion.div>
          <h3>Technical Skills </h3>
          <br />
          <h4>HTML, CSS , JavaScript,</h4>
          <h4>ReactJS, Redux, React Router</h4>
         <h4>Scss, RestAPI, Crud Operations</h4>
         <h4>Postman, Bootstrap, Firebase,</h4>
         <h4>Github, carousel, framer-motion</h4>
        </motion.div>

        <motion.div>
          <h3>Personal Skills</h3>
          <br />
          <h4>Time Management</h4>
          <h4>Creative and Innovative Thinking</h4>
          <h4>Problem Solving</h4>
          <h4>Decision making skills</h4>
          <h4>Dedicated towards works</h4>
        </motion.div>

        <motion.div>
          <h3>Languages Known</h3>
          <br />
          <h4>Hindi </h4>
          <h4>English</h4>
        </motion.div>
      </section>
    </div>
  );
}

export default Skills;
