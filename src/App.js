import React from "react";
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Nav from "./components/Nav";
import Toggle from "./components/Toggle";
import Increment from "./components/Increment";
import Mount from "./components/Mount";
import Hover from "./components/Hover";
import Cookie from "./components/Cookie";
import LocalStorage from "./components/LocalStorage";
import Script from "./components/Script";
import Theme from "./components/Theme";
import { PageWrapper } from "./state";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

function App() {
  return (
    <PageWrapper>
      <div>
        <Header>
          <Menu />
          <h1>Header</h1>
        </Header>
        <Nav />
        <Container>
          <h2>Super Cool</h2>
          <Theme />
          <Script />
          <Toggle />
          <Increment />
          <Mount />
          <Cookie />
          <LocalStorage />
          <Hover />
          <CardGrid>
            <Card style={{ background: "var(--purp)" }}>
              <h3>Some card</h3>
              <img src={purp} alt={purp} />
            </Card>
            <Card style={{ background: "var(--blue)" }}>
              <h3>Some card</h3>
              <img src={blue} alt={blue} />
            </Card>
            <Card style={{ background: "var(--black)" }}>
              <h3>Some card</h3>
              <img src={black} alt={black} />
            </Card>
            <Card style={{ background: "var(--green)" }}>
              <h3>Some card</h3>
              <img src={green} alt={green} />
            </Card>
          </CardGrid>
        </Container>
      </div>
    </PageWrapper>
  );
}

export default App;
