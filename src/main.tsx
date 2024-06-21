import ReactDOM from 'react-dom/client'
import { App } from './pages/main'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>

)
