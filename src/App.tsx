import React from 'react';
import './styles/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, NotFound, Posts, Users } from './pages';

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Users />,
  },
  {
    path: '/posts/:id',
    element: <Posts />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
  ]);

  return (
    <RouterProvider router={ router } />
  );
}

export default App;
