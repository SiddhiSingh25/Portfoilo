import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Profile from './Profile/Profile.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import { element } from 'three/webgpu';
import Error from './Error.jsx';
import Message from './Contact/Message.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />, 
      },
      {
        path: 'app',
        element: <App />,
      },
      {
        path: 'profile',
        element: <Profile/>,
      },
      {
        path: 'addtoHome',  
        element: <App />, 
      },
      {
        path: 'contact',  
        element: <Message />, 
      },
      {
        path : "*",
        element : <Error/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
