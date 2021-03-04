import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import store from "./store";

const theme = createMuiTheme({
    spacing: 3,
    palette: {
        primary: {
            main: "#28f8d9",
        },
        secondary: {
            main: "#f66d37"
        }
    }
});

ReactDOM.render(
  <Provider store={store}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
