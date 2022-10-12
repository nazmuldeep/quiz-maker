import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import Home from './Component/Home/Home';
import Coursesanalyties from './Component/Coursesanalyties/Coursesanalyties';
import Blog from './Component/Blog/Blog';
import Quiz from './Component/Quiz/Quiz';


function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: 'home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: 'coursesanalyties',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Coursesanalyties></Coursesanalyties>
        },
        { path: 'blog', element: <Blog></Blog> },
        {
          path: '/course/:id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Quiz></Quiz>
        }
      ]
    },
    { path: '*', element: <h1>opps sumthing is wroooong</h1> }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
