import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './routes/login';
import ErrorPage from './routes/error-page';
import Profile from './routes/profile';
import App from './App';
import { AuthProvider } from './contexts/Auth/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/profile",
        element: <Profile />
      }
    ]
  }
]);

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider> 
    </React.StrictMode>
  );
} else {
  console.error("Element with id 'root' not found.");
}
