import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {App} from '@/components/App/App.tsx'
import '@/styles/style.css'
import { Home } from '@/components/Home/Home';
import { WhoAreWe } from '@/components/WhoAreWe/WhoAreWe';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/quem-nos-somos",
        element: <WhoAreWe/>,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}
