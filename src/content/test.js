import 'alpinejs'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';
import App from './App.js';


// window.addEventListener('load', () => {
//   const anchor = document.createElement('div');
//   anchor.id = 'kal-app'
//   document.body.insertBefore(anchor, document.body.firstChild)

//   proxyStore.ready().then(() => {
//     render(
//       <Provider store={proxyStore}>
//         <App />
//       </Provider>, document.getElementById('kal-app')
//     )
//   })
// })


// var iframe = document.createElement('iframe');
// iframe.src = chrome.extension.getURL("popup.html");
// iframe.className = 'css-isolation-popup';
// iframe.frameBorder = 0;
// document.body.appendChild(iframe);

// chrome.runtime.onMessage.addListener(function (message) {
//   iframe.style.display = 'none';
// });

// class TopMenu extends HTMLElement {
//   mountPoint;

//   connectedCallback() {
//     this.mountReactApp();
//   }

//   disconnectedCallback() {
//     ReactDOM.unmountComponentAtNode(this.mountPoint);
//   }

//   mountReactApp() {
//     if (!this.mountPoint) {
//       this.mountPoint = document.createElement('div');
//       this.attachShadow({ mode: 'open' }).appendChild(this.mountPoint);
//     }

//     ReactDOM.render(<TopMenuComponent />, this.mountPoint);
//   }
// }

// window.customElements.define('top-menu', TopMenu);

class CustomElement extends HTMLElement {
  connectedCallback() {
    const mount = document.createElement('span');
    const shadow = mount.attachShadow({ mode: 'open' })
    const container = shadow.appendChild(mount)

    Object.defineProperty(container, 'ownerDocument', { value: shadow });
    shadow.createElement = (...args) => document.createElement(...args);
    shadow.createElementNS = (...args) => document.createElementNS(...args);
    shadow.createTextNode = (...args) => document.createTextNode(...args);

    // proxyStore.ready().then(() => {
    //   render(
    //     <Provider store={proxyStore}>
    //       <App />
    //     </Provider>, container
    //   )
    // })

    ReactDOM.render((
      <button onClick={() => alert('I work!')}>Click me</button>
    ), mount);
  }
}

customElements.define('custom-element', CustomElement)

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



class CustomElement extends HTMLElement {
  connectedCallback() {
    // setup
    const shadow = this.attachShadow({ mode: "open" });
    const root = document.createElement("div");
    shadow.appendChild(root);

    // Making the shadow appear like document 
    // so react events work as normal
    Object.defineProperty(root, "ownerDocument", { value: shadow });
    shadow.createElement = (...args) => document.createElement(...args);

    ReactDOM.render(<App />, root);
  }
}
customElements.define("custom-element", CustomElement);



const root = document.body.appendChild(this.doc.createElement('div'));
const shadow = root.attachShadow({ mode: 'closed' });
const container = shadow.appendChild(this.doc.createElement('div'));

Object.defineProperty(container, 'ownerDocument', { value: shadow });
shadow.createElement = (...args) => document.createElement(...args);
shadow.createElementNS = (...args) => document.createElementNS(...args);
shadow.createTextNode = (...args) => document.createTextNode(...args);

ReactDOM.render((
  <button onClick={() => alert('I work!')}>Click me</button>
), container);


// const proxyStore = new Store();

// window.addEventListener('load', () => {

//   const anchor = document.createElement('div');
//   const shadowRoot = anchor.attachShadow({ mode: 'open' })

//   const innerContent = `<link rel="stylesheet" type="text/css" href="${chrome.extension.getURL("dist/tailwind.dist.css")}"></link>
//    <div id='shadow-kal-root' />`

//   shadowRoot.innerHTML = innerContent

//   console.log("SROOT", shadowRoot.getElementById('shadow-kal-root'))

//   document.body.appendChild(anchor)

//   proxyStore.ready().then(() => {
//     render(
//       <Provider store={proxyStore}>
//         <App />
//       </Provider>, shadowRoot.querySelector('#shadow-kal-root')
//     )
//   })

// })

// const root = document.body.appendChild(this.doc.createElement('div'));
// const shadow = root.attachShadow({ mode: 'closed' });
// const container = shadow.appendChild(this.doc.createElement('div'));

// Object.defineProperty(container, 'ownerDocument', { value: shadow });
// shadow.createElement = (...args) => document.createElement(...args);
// shadow.createElementNS = (...args) => document.createElementNS(...args);
// shadow.createTextNode = (...args) => document.createTextNode(...args);

// ReactDOM.render((
//   <button onClick={() => alert('I work!')}>Click me</button>
// ), container);


// const anchor = document.createElement('div')
// const root = document.body.appendChild(anchor)
// const shadow = root.attachShadow({ mode: 'closed' });
// const container = shadow.appendChild(anchor)

// Object.defineProperty(container, 'ownerDocument', { value: shadow });
// // shadow.createElement = (...args) => document.createElement(...args);
// // shadow.createElementNS = (...args) => document.createElementNS(...args);
// // shadow.createTextNode = (...args) => document.createTextNode(...args);

// shadow.innerHTML =
//   `
//   <link rel="stylesheet" type="text/css" href="${chrome.extension.getURL("dist/tailwind.dist.css")}"></link>
//    <div id='shadow-kal-root' />
//    `

// proxyStore.ready().then(() => {
//   render(
//     <Provider store={proxyStore}>
//       <App />
//     </Provider>, container
//   )
// })


// customElements.define('show-hello', class extends HTMLElement {
//   connectedCallback() {
//     const shadow = this.attachShadow({mode: 'open'});
//     shadow.innerHTML = `<p>
//       Hello, ${this.getAttribute('name')}
//     </p>`;
//   }
// });

// window.addEventListener('load', () => {
//   const anchor = document.createElement('div');
//   anchor.id = 'kal-app'
//   document.body.insertBefore(anchor, document.body.firstChild)


//   proxyStore.ready().then(() => {
//     render(
//       <Provider store={proxyStore}>
//         <App />
//       </Provider>, document.getElementById('kal-app')
//     )
//   })
// })


// window.addEventListener('load', () => {
//   const injectDOM = document.createElement('div');
//   document.body.insertBefore(injectDOM, document.body.firstChild);
//   store.ready().then(() => {
//     render(
//       <Provider store={store}>
//         <ShadowDOM include={['styles/global.css']}>                                
//           <App />
//           <ShadowDOM />
//      </Provider>,
//      injectDOM);
//   });
// });






// class XSearch extends HTMLElement {
//   connectedCallback() {
//     const mountPoint = document.createElement('span');
//     this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

//     const name = this.getAttribute('name');
//     const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
//     ReactDOM.render(<a href={url}>{name}</a>, mountPoint);
//   }
// }
// customElements.define('x-search', XSearch);

// customElements.define('show-hello', class extends HTMLElement {
//   connectedCallback() {
//     const shadow = this.attachShadow({mode: 'open'});
//     shadow.innerHTML = `<p>
//       Hello, ${this.getAttribute('name')}
//     </p>`;
//   }
// });

// window.addEventListener('load', () => {
//   const anchor = document.createElement('div');
//   anchor.id = 'kal-app'
//   document.body.insertBefore(anchor, document.body.firstChild)


//   proxyStore.ready().then(() => {
//     render(
//       <Provider store={proxyStore}>
//         <App />
//       </Provider>, document.getElementById('kal-app')
//     )
//   })
// })

// window.addEventListener('load', () => {
//   const injectDOM = document.createElement('div');
//   document.body.insertBefore(injectDOM, document.body.firstChild);
//   store.ready().then(() => {
//     render(
//       <Provider store={store}>
//         <ShadowDOM include={['styles/global.css']}>                                
//           <App />
//           <ShadowDOM />
//      </Provider>,
//      injectDOM);
//   });
// });




