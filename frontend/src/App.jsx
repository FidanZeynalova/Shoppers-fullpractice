import { RouterProvider, createBrowserRouter } from 'react-router'
import './App.css'
import { ROUTES } from './routes/routes'

function App() {
 let route = createBrowserRouter(ROUTES)

  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
