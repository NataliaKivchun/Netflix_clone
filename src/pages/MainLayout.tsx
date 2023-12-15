import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};
