import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap');

  :root {
    --background: #282925;
    --background-list: #2e2f2b;
    --primary-header: #695eb8;
    --secondary-header: #fff;
    --input-color: #b1b1b0;
    --text-color-to-dark: #545452;
    --text-color-to-light: #666;
    --hoover-color: #363734;
    --border: #474845;
    --white-border: #d3d3d3;
    --box: #e0e0e0;
    --box-border: #d0d0d0;
    --success: #75ba24;
    --failed: #ec8702;
    --error: #e15251;

    --get-action-text: #7d69cb;
    --post-action-text: #59a210;
    --put-action-text: #d07502;
    --patch-action-text: #ae9602;
    --delete-action-text: #d04444;
    --head-action-text: #1c90b4;
  }

  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    outline: none;
  }

  html, body {
    width: 100vw;
    height: 100vh;
  }

  ul, li, a {
    text-decoration: none;
    list-style: none;
  }

  #app {
    background-color: var(--background);
    font-family: Roboto, sans-serif;
    display: flex;
    max-height: 100vh;
    max-width: 100vw;
    overflow-y: none;
    overflow-x: none;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

`