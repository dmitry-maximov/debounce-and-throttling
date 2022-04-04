import Footer from './Footer';
import NavBar from './NavBar';

const Layout = (props) => {
  return (
    <>
      <NavBar theme={props.theme} handlerTheme={props.handlerTheme} />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
