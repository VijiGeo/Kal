import 'alpinejs'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';
import App from './App.js';

const proxyStore = new Store();

window.addEventListener('load', () => {

  class CustomElement extends HTMLElement {
    connectedCallback() {
      const root = document.body.appendChild(this.doc.createElement('div'));
      const shadow = root.attachShadow({ mode: 'closed' });
      const container = shadow.appendChild(this.doc.createElement('div'));

      Object.defineProperty(root, "ownerDocument", { value: shadow });
      shadow.createElement = (...args) => document.createElement(...args);
      shadow.createElementNS = (...args) => document.createElementNS(...args);
      shadow.createTextNode = (...args) => document.createTextNode(...args);

      proxyStore.ready().then(() => {
        render(
          <Provider store={proxyStore}>
            <App />
          </Provider>, container
        )
      })
    }
  }

  // window.customElements.define("custom-element", CustomElement)
  console.log("WINDOW", window)

})

