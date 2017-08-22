import React, { Component } from "react"
import { MainDiv } from "./style"
import Header from "./Header"
import Add from "./Add"

//structure the page with Maindiv, header and Add components
class App extends Component {
  render() {
    return (
      <MainDiv>
        <Header />
        <Add />
      </MainDiv>
    )
  }
}

export default App
