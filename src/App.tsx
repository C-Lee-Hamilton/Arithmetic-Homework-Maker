import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFound';
import Settings from './pages/Generator';
import Preview from './pages/Preview';
import Generator from './pages/Generator';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />, 
    children: [
      {
        index: true, 
        element: <Generator/>,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'preview',
        element: <Preview />,
      },
     
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

const App: React.FC = () => {
  return (
    <div className="w-full h-full bg-grey">
    <RouterProvider router={router} />
  </div>
  );
};

export default App;