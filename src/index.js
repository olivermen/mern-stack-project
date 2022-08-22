import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename='/client' >
    <App />
  </BrowserRouter>
)

serviceWorker.unregister()