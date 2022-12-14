import React from "react";
import Tabs from "../shared/tabs/Tabs";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

function Dashboard() {
  return (
    <Container>
      <Content>
        <Tabs></Tabs>
      </Content>
    </Container>
  );
}

export default Dashboard;

const Content = styled.div`
  max-width: 689px;
  height: 300px;
  background-color: #0e0826;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  @media (max-width: 1008px) {
    height: 430px;
    width: 350px;
  }
`;
