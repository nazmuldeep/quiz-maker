import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Header/Header';
import Header from './Header/Header';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header></Header>,
      // children: [
      //   {
      //     path: '/home',
      //     element: 
      //   }, 
      //   {
      //     path: '/',
      //     loader: () => fetch('.json'),
      //     element: 
      //   },

      //   {
      //     path: '/about',
      //     element: 
      //   }
      // ]

    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
