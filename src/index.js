import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import BlogProvider from '../src/provider/blog/blog.provider';
import ToggleProvider from '../src/provider/toggle/toggle.provider';

ReactDOM.render(
  <ToggleProvider>
    <BlogProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BlogProvider>
  </ToggleProvider>
    ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
