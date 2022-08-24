import "./Layout.css";

const Layout = (props) => {
  return <div className="layout mx-auto">{props.children}</div>;
};

export default Layout;
