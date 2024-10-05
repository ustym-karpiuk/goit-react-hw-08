import AppBar from "../AppBar/AppBar";

// eslint-disable-next-line react/prop-types
const Layout = ( {children} ) => {
  return (
    <div>
      <AppBar />
      <hr />
      {children}
    </div>
  );
};

export default Layout;