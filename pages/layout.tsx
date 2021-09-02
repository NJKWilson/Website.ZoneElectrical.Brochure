import TopBar from "../components/layout/topbar";
import Footer from "../components/layout/footer";

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="content">
      <TopBar />
      { children }
      <Footer />
    </div>
  );
}
 
export default Layout;