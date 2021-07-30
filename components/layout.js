import TopBar from "./topbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <TopBar />
      { children }
      <Footer />
    </div>
  );
}
 
export default Layout;