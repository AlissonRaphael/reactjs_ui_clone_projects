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
  }

  .react-resizable {
    position: relative;
  }
  .react-resizable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+');
    background-position: bottom right;
    padding: 0 3px 3px 0;
  }
  .react-resizable-handle-sw {
    bottom: 0;
    left: 0;
    cursor: sw-resize;
    transform: rotate(90deg);
  }
  .react-resizable-handle-se {
    bottom: 0;
    right: 0;
    cursor: se-resize;
  }
  .react-resizable-handle-nw {
    top: 0;
    left: 0;
    cursor: nw-resize;
    transform: rotate(180deg);
  }
  .react-resizable-handle-ne {
    top: 0;
    right: 0;
    cursor: ne-resize;
    transform: rotate(270deg);
  }
  .react-resizable-handle-w,
  .react-resizable-handle-e {
    top: 50%;
    margin-top: -10px;
    cursor: ew-resize;
  }
  .react-resizable-handle-w {
    left: 0;
    transform: rotate(135deg);
  }
  .react-resizable-handle-e {
    right: 0;
    transform: rotate(315deg);
  }
  .react-resizable-handle-n,
  .react-resizable-handle-s {
    left: 50%;
    margin-left: -10px;
    cursor: ns-resize;
  }
  .react-resizable-handle-n {
    top: 0;
    transform: rotate(225deg);
  }
  .react-resizable-handle-s {
    bottom: 0;
    transform: rotate(45deg);
  }

`