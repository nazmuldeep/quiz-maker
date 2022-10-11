import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Header/Header';
import Header from './Header/Header';
import Main from './Main/Main';
import Home from './Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        // {
        //   path: '/home',
        //   element:
        // },
        {
          path: '/',
          loader: () => fetch('topics.json'),
          element: <Home></Home>
        },

        // {
        //   path: '/quiz',
        //   element: 
        //   }
      ]

    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
