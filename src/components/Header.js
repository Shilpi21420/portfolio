import React from "react";
import { AiOutlineMenu } from "react-icons/ai";


const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen}/>
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};
// HeaderPhone component used for make website responsive .. we can see the header option in phone also. with the help of menuOpen and setMenuopen

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};
const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>Shilpi</h2>
    <div>
      {/* # tag used in href to move to that part of project section  basically we are sending the id.
     and wher we want to use that we can access using id atributes*/}
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
        Work
      </a>
      <a onClick={() => setMenuOpen(false)} href="#education">
        Education
      </a>
      <a onClick={() => setMenuOpen(false)} href="#experience">
        Experience
      </a>
      <a onClick={() => setMenuOpen(false)} href="#skills">
        Skills
      </a>
      <a onClick={() => setMenuOpen(false)} href="#intrests">
        Interests
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>
    </div>
    <a href="mailto:s4shilpi567@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
