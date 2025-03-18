import { RouterProvider } from 'react-router'
import { Router } from "./router/router"
import './App.css'

function App() {

  return (
    <>
    <RouterProvider router={Router}></RouterProvider>
    </>
  )
}

export default App
