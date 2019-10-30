import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleaction';

import  ContactsSection  from "./components/contactsSection/contactsSection";
import  MainSection  from "./components/mainSection/mainSection";

import './App.scss';


class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <MainSection />
        <ContactsSection />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
