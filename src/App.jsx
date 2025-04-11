
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Menu from './components/Menu'
import Home from './components/telas/Home'
import About from "./components/telas/About";
import Categoria from "./components/telas/categoria/Categoria"
import Produto from "./components/telas/produto/Produto"
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/sobre",
        element: <About/>
      },
      {
        path: "/categorias",
        element: <Categoria/>
      },
      {
        path: "/produtos",
        element: <Produto/>
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
