import React from "react";
import Logo from "../imgs/book.png";
export default function Header() {
  return (
    <header>
      <div className="container">
        <nav className="row">
          <div  className="box-header">
            <a className="logo" href="https://book.uz/">
              <img
                style={{ width: "100px", height: "100px" }}
                src={Logo}
                alt=""
              />
            </a>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="https://book.uz/">
                  books.uz
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
