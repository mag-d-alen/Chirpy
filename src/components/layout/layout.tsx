import Navbar from "./navbar";
import Footer from "./footer";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center gap-4 p-24 bg-yellow-500">
        {children}
      </main>
      <Footer />
    </>
  );
};
export default Layout;
