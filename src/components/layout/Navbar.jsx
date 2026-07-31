import "./Navbar.css";
import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import MobileMenu from "./MobileMenu";
import useActiveSection from "../../hooks/useActiveSection";
import { IoClose } from "react-icons/io5";
import useScroll from "../../hooks/useScroll";
import navigation from "../../data/navigation";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();
const scrolled = useScroll();
useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [menuOpen]);
useEffect(() => {
  function handleKeyDown(event) {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  }

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

      <div className="container navbar-container">

        <div className="logo">

          <span className="logo-dot"></span>

          <h2>

            Souharda

            <span>.</span>

          </h2>

        </div>

        <nav className="desktop-nav">

          {navigation.map((item) => (

            <a
              key={item.id}
              href={item.link}
              className={`nav-link ${
active === item.link.replace("#","")
? "active-link"
: ""
}`}
            >

              {item.title}

            </a>

          ))}

        </nav>

        <button
          className="resume-btn"
        >

          Resume

        </button>

       <button
  className={`menu-btn ${menuOpen ? "active" : ""}`}
  onClick={toggleMenu}
  aria-label="Toggle Navigation Menu"
>
          {

            menuOpen

              ?

              <IoClose size={28} />

              :

              <HiOutlineMenuAlt3 size={28} />

          }

        </button>

      </div>

      <div

        className={`mobile-menu ${menuOpen ? "active" : ""}`}

      >

        {

          navigation.map((item) => (
            
            <a

              key={item.id}

              href={item.link}

              onClick={() => setMenuOpen(false)}

            >

              {item.title}

            </a>

          ))

        }

      </div>

    </header>
    
            <MobileMenu
  isOpen={menuOpen}
  onClose={() => setMenuOpen(false)}
/>
</>
  );
}

export default Navbar;