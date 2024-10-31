import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { ScrollToTop } from "@/components/ScrollToTop/ScrollToTop";
import { WhatsApp } from "@/components/Whatsapp/Whatsapp";

export const App = () => {
  return (
    <main>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
      <WhatsApp />
    </main>
  )
}