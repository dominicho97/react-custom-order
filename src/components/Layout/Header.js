import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Make your own Pasta!</h1>
    </header>
  );
}

const headerStyle = {
  background: "linear-gradient(to top left, #ffff00 50%, #ff9900 100%)",
  color: "#fff",
  textallign: "center",
  padding: "10px"
};

export default Header;
