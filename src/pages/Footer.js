import React from "react";
import Logo from "../imgs/book.png";
export default function Footer() {
  return (
    <footer>
      <div className="container ">
        <div className="row justify-content-around ">
          <div className="col-6    col-md-6 col-lg-4">
            <img
              style={{
                width: "100px",
                height: "100px",
                marginTop: "80px",
                marginBottom: "80px",
              }}
              src={Logo}
              alt=""
            />
          </div>
          <div className="col-6   col-md-6 col-lg-4">
            <p style={{ marginTop: "80px", marginBottom: "30px" }}>
              Единый кол-центр (круглосуточно)
            </p>
            <p style={{ marginBottom: "86px" }}>+998 (99) 999-9999</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
