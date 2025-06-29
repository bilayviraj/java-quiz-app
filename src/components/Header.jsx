import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";

const Header = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <header className="header">
      <h2 className="logo">Java Quiz App</h2>
      <div className="theme-buttons">
        <button onClick={() => navigate("/")} title="Home">
          <FaHome size={18} />
        </button>
        <button onClick={toggleTheme} title="Toggle Theme">
          {theme === "dark" ? <BsSun size={18} /> : <BsMoon size={18} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
