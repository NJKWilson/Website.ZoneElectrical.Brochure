import TopBar from "../components/layout/topbar";
import Footer from "../components/layout/footer";

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