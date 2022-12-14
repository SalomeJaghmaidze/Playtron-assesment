import React, { useState } from "react";
import styled from "styled-components";
import Auto from "../../dashboard/auto/Auto";
import Game from "../../dashboard/game/Game";

function Tabs() {
  const [activeTab, setActiveTab] = useState("tab2");

  const handleTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <Nav>
      <List>
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={() => handleTab("tab1")}
        >
          Game
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={() => handleTab("tab2")}
        >
          Auto
        </li>
      </List>

      <Outlet>{activeTab === "tab1" ? <Game /> : <Auto />}</Outlet>
    </Nav>
  );
}

export default Tabs;

const Nav = styled.div`
  width: 689px;
  display: flex;
  margin-top: 10px;
  border-radius: 2rem;
  height: 36px;
  color: rgba(255, 255, 255, 0.3);

  @media (max-width: 1008px) {
    max-width: 350px;
  }
`;

const List = styled.ul`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(56, 46, 112, 0.2);
  border-radius: 6px;
  padding-left: 0px;

  li {
    width: 105px;
    padding: 9px;
    list-style: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.7s;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
  }

  .active {
    color: #ffffff;
    background: #160f37;
    border-radius: 6px;
  }
`;
const Outlet = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 1008px) {
    top: 55%;
  }
`;
