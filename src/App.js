import React, { Component } from "react";

import ContactsSection from "./components/contactsSection/contactsSection";
import MainSection from "./components/mainSection/mainSection";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainSection />
        <ContactsSection />
      </div>
    );
  }
}

export default App;
