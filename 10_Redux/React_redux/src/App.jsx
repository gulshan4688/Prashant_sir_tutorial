import "./App.css";
import React from "react";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage";

const App = () => {
  const privacy = useSelector((store) => store.Privacy);
  return (
    <div>
      <Container>
        <Header />
        {privacy ? <PrivacyMessage /> : <DisplayCounter />}
        <Controls />
      </Container>
    </div>
  );
};

export default App;
