import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap');

  :root {
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: rgb(32,34,37);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;
    
    --white: #fff;
    --gray: #8a8c90;
    --chat-input: rgb(64,68,75);
    --symbol: #74777a;
    --notification: #f84a4b;
    --discord: #6e86d6;
    --mention-detail: #f9a839;
    --mention-message: #413f3f;
    --link: #5d80d6;
    --on: #3FA978;
  }

  * {
    margin: 0px;
    padding: 0px;
    outline: 0px;
    border: none;
    box-sizing: border-box;
  }

  html, body, #app {
    height: 100%;
  }

  body {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.6px;
    -webkit-font-smoothing: antialiased !important;
    background-color: tomato;
    color: #333;
  }

  ul {
    list-style: none;
  }
`