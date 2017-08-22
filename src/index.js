import React from "react"
import ReactDOM from "react-dom"
//import App component
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

//renders the root div of index.html with App module
ReactDOM.render(<App />, document.getElementById("root"))
registerServiceWorker()
