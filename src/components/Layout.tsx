import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }:any) => {
   
  return (
    <>
      <Navbar/>
      <main /*style={{position:'fixed',width:'100%',overflow:'scroll'}}*/>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
