import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { ScrollToTop } from "@/components/ScrollToTop/ScrollToTop";

export const App = () => {
  return (
    <main>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}