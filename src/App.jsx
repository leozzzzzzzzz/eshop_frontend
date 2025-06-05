import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/telas/Home';
import About from './components/telas/About';
import Categoria from './components/telas/categoria/Categoria';
import Produto from './components/telas/produto/Produto';
import Login from './components/telas/login/Login';
import MenuPublico from './components/MenuPublico';
import MenuPrivado from './components/MenuPrivado';

const router = createBrowserRouter([
  {
    path : "/",
    element : <MenuPublico/>,
    children : [
      {
        index : true,
        element : <Home/>
      },
      {
        path : "/About",
        element : <About/>
      }	,  
      {
        path : "login",
        element :  <Login/>
      }              
    ]
  }
  ,
  {
    path: "/privado",
    element: <MenuPrivado />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path : "About",
        element : <About/>
      },  
      {
        path: "categorias",
        element: <Categoria />,
      },
      {
        path: "produtos",
        element: <Produto />,
      }
    ]
  }
])

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;