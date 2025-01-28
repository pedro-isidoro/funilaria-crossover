import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@/styles/style.css'
import { App } from '@/components/App/App.tsx'
import { Home } from '@/components/Home/Home';
import { WhoAreWe } from '@/components/WhoAreWe/WhoAreWe';
import { FunilariaExpress } from '@/components/AllServices/FunilariaExpress';
import { MicroPintura } from '@/components/AllServices/MicroPintura';
import { Polimento } from '@/components/AllServices/Polimento';
import { Vitrificacao } from '@/components/AllServices/Vitrificacao';
import { Higienizacao } from '@/components/AllServices/Higienizacao';
import { MartelinhoDeOuro } from '@/components/AllServices/MartelinhoDeOuro';
import { HigienizacaoComOzonio } from '@/components/AllServices/HigienizacaoComOzonio';
import { ParaChoque } from '@/components/AllServices/ParaChoque';
import { Address } from '@/components/Address/Address';
import { PrivacityPolitics } from '@/components/privacityPolitics/PrivacityPolitics'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/quem-nos-somos", element: <WhoAreWe /> },
      { path: "/servicos/funilaria-express", element: <FunilariaExpress /> },
      { path: "/servicos/micro-pintura", element: <MicroPintura /> },
      { path: "/servicos/polimento", element: <Polimento /> },
      { path: "/servicos/vitrificacao", element: <Vitrificacao /> },
      { path: "/servicos/higienizacao", element: <Higienizacao /> },
      { path: "/servicos/martelinho-de-ouro", element: <MartelinhoDeOuro /> },
      { path: "/servicos/higienizacao-com-ozonio", element: <HigienizacaoComOzonio /> },
      { path: "/servicos/para-choque", element: <ParaChoque /> },
      { path: "/enderecos", element: <Address /> },
      { path: "/politica-de-privacidade", element: <PrivacityPolitics /> },
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );
}