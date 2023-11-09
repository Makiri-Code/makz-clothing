import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import { UserProvider} from './component/context/User.Context';
import { ProductsProvider } from './component/context/ProductsContext';
import { DropdownProvider } from './component/context/DropdownContext';
import { ThemeProvider } from './component/context/ThemeContext';
import reportWebVitals from './reportWebVitals';
import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <DropdownProvider>
            <ThemeProvider>
              <App/>
            </ThemeProvider>
          </DropdownProvider>
        </ProductsProvider> 
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
