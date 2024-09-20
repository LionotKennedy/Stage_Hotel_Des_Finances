import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import { createStore } from 'redux';

import './assets/style/index.css'
import './assets/style/theme.css'
import './assets/style/grid.css'
import "./assets/boxicons-2.0.7/css/boxicons.min.css"

document.title = 'Finances'

const store = createStore(
  rootReducer
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)
