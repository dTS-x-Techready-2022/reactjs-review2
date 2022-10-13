import { ResponsiveAppBar as Navbar } from "../Navbar/Navbar";
import { StickyFooter as Footer } from "../Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
