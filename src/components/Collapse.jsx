import { useState } from "react";
import "../styles/components/Collapse.scss";
import CollapseArrow from "./icons/CollapseArrow";

const Collapse = ({ title, content, size, list = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse ${size === "large" ? "large" : "medium"}`}>
      <div className="collapse-title">
        <h2>{title}</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`collapse-button ${isOpen ? "closing" : ""}`}
        >
          <CollapseArrow />
        </button>
      </div>

      <div className={`collapse-content ${isOpen ? "open" : "closed"}`}>
        {list ? (
          <ul>
            {content.map((item, index) => (
              <li key={index} className="fs-text-sm">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="fs-text-sm">{content}</p>
        )}
      </div>
    </div>
  );
};
export default Collapse;
