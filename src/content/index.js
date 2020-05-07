import 'alpinejs'
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';
import App from './App.js';
import ReactHTMLElement from 'react-html-element';

const proxyStore = new Store();

class CustomComponent extends ReactHTMLElement {
  connectedCallback() {

    this.template = `<link rel="stylesheet" type="text/css" href="${chrome.extension.getURL("dist/tailwind.dist.css")}"></link>
    <div id='shadow-kal-root' />`

    proxyStore.ready().then(() => {
      render(
        <Provider store={proxyStore}>
          <App />
        </Provider>, this.mountPoint
      )
    })
  }
}

customElements.define('kal-container', CustomComponent);

const template = document.createElement('kal-container')
document.body.appendChild(template);
