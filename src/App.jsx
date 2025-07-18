import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import{
  About,
  // Cart,
  // Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  // Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";
import { ErrorElement } from './components';
import{loader as landingLoader} from './pages/Landing'
import{loader as singleProductLoader} from './pages/SingleProduct'
import{loader as ProductLoader} from './pages/Products'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element:<HomeLayout/>,
      errorElement:<Error/>,
       children: [
        {
          index: true,
          element: <Landing/>,
          errorElement: <ErrorElement/>,
          loader: landingLoader
        },
        {
          path: 'about',
          element: <About/>,
          errorElement:<Error/>,
        },
        {
          path: 'products',
          element: <Products/>,
          loader: ProductLoader
          
        },
        {
          path: 'products/:id',
          element: <SingleProduct/>,
          loader: singleProductLoader

        }
       ]
    },
    
    {
      path: '/login',
      element:<Login/>,
      errorElement:<Error/>,
    },
    {
      path: '/register',
      element:<Register/>,
      errorElement:<Error/>
    },
  ]
)

const App = () => {
  return <RouterProvider router={router}/>
}

export default App;
