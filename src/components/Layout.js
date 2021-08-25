import NavigationDefault from "components/nav/Default";
import Footer from "components/Footer";

const Layout = ({ children }) => {
  return (
    <main className="bg-color-darkgreen">
      <NavigationDefault />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
