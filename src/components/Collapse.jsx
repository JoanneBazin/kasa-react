import { useState } from "react";
import openIcon from "../assets/icons/arrow_open.svg";
import "../styles/components/Collapse.scss";

const Collapse = ({ item }) => {
  const { title, content } = item;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-title">
        <h2>{title}</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`collapse-button ${isOpen ? "closing" : ""}`}
        >
          <img src={openIcon} alt="Ouvrir et fermer l'onglet" />
        </button>
      </div>
      {isOpen && (
        <div className="collapse-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};
export default Collapse;
