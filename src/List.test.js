import React from "react"
import ReactDOM from "react-dom"
import List from "./List"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<List arrList={["item 1", "item 2", "item 3"]} />, div)
})
