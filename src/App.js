import React, { Component } from 'react';
import logo from './logo.svg';
import MainDiv from './stylecomps/MainDiv';
import Header from './Header';
import Add from './Add';

class App extends Component {
  render() {
    return (
      <MainDiv>
        <Header />
        <Add />
      </MainDiv>
    );
  }
}

export default App;
