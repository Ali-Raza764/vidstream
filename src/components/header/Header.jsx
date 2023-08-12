import "./style.css";
import searchIcon from "./assets/search-icon.svg";
import HomeIcon from "./assets/home.svg";
import ytLogo from "./assets/logo.png";
import accountImage from "./assets/account.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <Link to="/">
            <img src={ytLogo} alt="Vidstream" />
          </Link>
        </div>

        <div className="search-box">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();

              searchTerm != "" ? navigate(`/results/${searchTerm}`) : "";
            }}
          >
            <div className="search">
              <input
                type="text"
                className="input"
                name="search"
                id=""
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />

              <img
                src={searchIcon}
                onClick={() =>
                  searchTerm != "" ? navigate(`/results/${searchTerm}`) : ""
                }
                alt="Go"
              />
            </div>
          </form>
        </div>

        <div className="nav">
          <div className="home">
            <Link to="/">
              <img src={HomeIcon} alt="Home" />
            </Link>
          </div>

          <div className="account">
            <img src={accountImage} alt="A" />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
