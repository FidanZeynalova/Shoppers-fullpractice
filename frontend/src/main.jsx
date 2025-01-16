import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './App/store.js'
import FavContextProvider from './context/FavContext.jsx'

createRoot(document.getElementById('root')).render(
  <FavContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </FavContextProvider>
)
