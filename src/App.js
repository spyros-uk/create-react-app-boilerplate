import React, { Component } from "react"
import { createGlobalStyle } from "styled-components"
import "./App.css"

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <div className="App">
          <header className="App-header">Happy coding!</header>
        </div>
      </>
    )
  }
}

export default App
