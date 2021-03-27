import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import App from './App';
import reportWebVitals from './reportWebVitals';

const customTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light'
  },
  fonts: {
    body: `"Fira Code", system-ui, sans-serif`,
    heading: '"Fira Code"',
    code: '"Fira Code"'
  },
  colors: {
    white: '#f0f3f7',
    gray: {
      50: '#eef4f9',
      100: '#d3d8de',
      200: '#b7bbc6',
      300: '#99a0af',
      400: '#7c8498',
      500: '#636a7f',
      600: '#4d5264',
      700: '#373a47',
      800: '#21222c',
      900: '#0b0b14'
    }
  }
})


ReactDOM.render(
  // <ChakraProvider theme={customTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  // </ChakraProvider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
