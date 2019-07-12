
import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from './configureStore';

const renderApp =
  render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>, root)

module.hot.accept(renderApp)





// const store = configureStore()

// const renderApp =
//   render(
//   <Provider store={store}>
//     <App />
//   </Provider>, root)

// module.hot.accept(renderApp)


// import React from 'react';
// import {render} from 'react-dom'
// import App from './App'
// // Redux Store
// import { Provider } from 'react-redux'
// import { configureStore } from './store'

// const store = configureStore()
// const renderApp =
// render((
//   <Provider store={store}>
//     <Router>
//       <App />
//     </Router>
//   </Provider>
// ), document.getElementById('root'))

// module.hot.accept(renderApp)


// import React from 'react';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/lib/integration/react';
// import { render } from 'react-dom'

// // import the two exports from the last code snippet.
// import { persistor, store } from './configureStore';
// // import your necessary custom components.
// import App from './App';

// const renderApp =
//   render(
//     <Provider store={store}>
//       // the loading and persistor props are both required!
//       <PersistGate persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>,root)


// export default renderApp;

