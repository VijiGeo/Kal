import 'alpinejs'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';
import App from './App.js';

const proxyStore = new Store();

const anchor = document.createElement('div');
anchor.id = 'kal-app';

document.body.insertBefore(anchor, document.body.childNodes[0]);


// var cssLink = document.createElement("link");
// cssLink.href = "style.css";
// cssLink.rel = "stylesheet";
// cssLink.type = "text/css";
// frames['iframe1'].document.head.appendChild(cssLink);


proxyStore.ready().then(() => {
  render(
    <Provider store={proxyStore}>
      <App />
    </Provider>
    , document.getElementById('kal-app'));
});

