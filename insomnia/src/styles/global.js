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

  body {
    background-color: var(--background);
    font-family: Roboto, sans-serif;
  }

`