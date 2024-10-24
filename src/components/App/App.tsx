import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export const App = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}