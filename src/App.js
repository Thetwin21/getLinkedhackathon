import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Navar from './Components/Navar';
import Home from './Components/Home';
import Newuser from './Signing/Newuser';
import Signup from './Signing/Signup';



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
         <Route index element={<Home />} />
         <Route path='/register' element={<Newuser />} />
         <Route path='/contact' element={<Signup />} />
      </Route>
    )
  )

  return (
    <div className='bg-bg w-full min-w-screen min-h-screen h-full overflow-hidden'>
      <RouterProvider router={router}/>
    </div>
 
  );
}

export default App;

const Root = () => {
  return (
  <div className='relative'>

  <Navar />
    <Outlet />
  </div>
  )
}