import React from 'react'
import App from './app/App'
import { ThemeContextProvider } from './theme/theme'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from './components/scroll/ScrollToTop'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ThemeContextProvider>
          <ScrollToTop />
          <App />
        </ThemeContextProvider>
      </Provider>
    </Router>
  </React.StrictMode>
)
