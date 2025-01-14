import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LayOutOne from './LayOuts/LayOutOne'
import Home from './Pages/Home'

function App() {
 const myRoute=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<LayOutOne/>}>
    <Route index element={<Home/>}/>
  </Route>
 ))

  return (
    <>
     <RouterProvider router={myRoute}/>
    </>
  )
}

export default App