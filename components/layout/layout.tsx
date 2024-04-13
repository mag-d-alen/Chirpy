"use client";
import Sidebar from "./sidebar";
import Footer from "./footer";


type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <main className="font-montserrat flex min-h-screen items-center justify-between bg-yellow-500 ">
        <Sidebar />
        <section className="flex flex-1">{children}</section>
      </main>
      <Footer />
    </>
  );
};
export default Layout;
