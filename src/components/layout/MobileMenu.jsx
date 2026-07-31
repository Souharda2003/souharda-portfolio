import "./MobileMenu.css";
import navigation from "../../data/navigation";

function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`mobile-overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      ></div>

      <aside className={`mobile-drawer ${isOpen ? "open" : ""}`}>
        <nav className="mobile-nav">
          {navigation.map((item) => (
            <a 
             aria-label={item.title}
              key={item.id}
              href={item.link}
              className="mobile-link"
              onClick={onClose}
            >
              {item.title}
            </a>
          ))}
        </nav>

        <button className="mobile-resume-btn">
          Resume
        </button>
      </aside>
    </>
  );
}

export default MobileMenu;