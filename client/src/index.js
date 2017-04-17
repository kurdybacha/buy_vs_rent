import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Run = () => (
    <MuiThemeProvider>
     <App/>
    </MuiThemeProvider>
);

ReactDOM.render(
  <Run />,
  document.getElementById('root')
);
