import 'alpinejs'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';
import App from './App.js';
import ShadowDOM from "react-shadow"

const proxyStore = new Store();

window.addEventListener('load', () => {
  const anchor = document.createElement('div');
  anchor.id = 'kal-app'
  document.body.insertBefore(anchor, document.body.firstChild)

  proxyStore.ready().then(() => {
    render(
      <Provider store={proxyStore}>
        {/* <ShadowDOM> */}
        <App />
        {/* </ShadowDOM> */}
      </Provider>, document.getElementById('kal-app')
    )
  })
})


// window.addEventListener('load', () => {
//   const injectDOM = document.createElement('div');
//   document.body.insertBefore(injectDOM, document.body.firstChild);
//   store.ready().then(() => {
//   render(
//     <Provider store={store}>
//        <ShadowDOM include={['styles/global.css']}>                                  <InjectApp />
//        <ShadowDOM/>
//      </Provider>,
//      injectDOM);
//   });
// });