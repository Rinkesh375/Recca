import React from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
  return (
    <div style={{ backgroundColor: "#1e633f" }}>
      <Nav>
        <ul>
          <h1>Reeco</h1>
          <li>Store</li>
          <li>Orders</li>
          <li>Analytics</li>
        </ul>
        <div>
          <FiShoppingCart size={"25px"} />
          <p>Hello, James</p>
        </div>
      </Nav>
    </div>
  );
}

const Nav = styled.nav`
  color: white;
  max-width: 1200px;
  display: flex;
  align-items: center;
  margin: auto;
  padding: 0px 10px;
  justify-content: space-between;

  ul {
    padding-left: 0;
    display: flex;
    list-style: none;
    align-items: center;
    gap: 50px;
    margin: 0px;

    h1 {
      font-size: 2rem;
      margin-top: 0px;
      margin-bottom: 0px;
    }
  }
  div {
    display: flex;
    gap: 50px;
    align-items: center;
  }
`;

export default Navbar;