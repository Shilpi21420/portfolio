import React from 'react'
import {motion} from 'framer-motion';

function Education() {
  return (
    <div id='education'>
      <h2>Education</h2>
      <section>
        <motion.div>
          <h3>10th Standard</h3>
          <br />
          <h4>SR DAV Public School,</h4>
          <h4>Purnea ,Bihar</h4>
          <p>CGPA : 9.6</p>
          <p>2014-2015</p>
        </motion.div>
        
        <motion.div>
          <h3>12th Standard</h3>
          <br />
          <h4>Millia Convent School,</h4>
          <h4> Purnea ,Bihar</h4>
          <p>2016-2017</p>
        </motion.div>

        <motion.div>
          <h3>Bachelor of Engineering (BE)</h3>
          <br />
          <h4>MVJ College of Engineering,</h4>
          <h4>Bengaluru</h4>
          <p>Information Science</p>
          <p>Percentage : 84.20%</p>
          <p>2017-2021</p>
        </motion.div>
      </section>
      
    </div>
  )
}

export default Education
