import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Header/Header';
import Header from './Header/Header';
import Main from './Main/Main';
import Home from './Home/Home';
import Quiz from './Quiz/Quiz';

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
        {
          path: '/topic/:id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Quiz></Quiz>
        }
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
