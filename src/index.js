import React from 'react';
import ReactDOM from 'react-dom';
// REDUX
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
// REDUX
// import productReducer from './store/reducers/products';

// CONTEXT
import ProductsProvider from './context/products-context';

// REDUX
// const rootReducer = combineReducers({
//   shop: productReducer
// });

// const store = createStore(rootReducer);

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// );

// We can delete the store folder

// CONTEXT
ReactDOM.render(
  <ProductsProvider >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>,
  document.getElementById('root')
);
