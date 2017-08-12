import React, { Component } from 'react';
import {MainDiv} from './style';
import Header from './Header';
import Add from './Add';
import List from './List';

let arrList = ['item1', 'item 2', 'hlkhklhlh 3'];

class App extends Component {
  render() {
    return (
      <MainDiv>
        <Header />
        <Add />
        <List arrList = {arrList}/>
      </MainDiv>
    );
  }
}

export default App;
