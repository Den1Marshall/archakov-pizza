import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import Layout from './layout/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import FullPizza from './pages/FullPizza';

import { PersistGate } from 'redux-persist/integration/react';

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/pizza/:id' element={<FullPizza />} />
            <Route
              path='*'
              element={<ErrorPage />}
              errorElement={<ErrorPage />}
            />
          </Route>
        </Routes>
      </PersistGate>
    </BrowserRouter>
    {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
