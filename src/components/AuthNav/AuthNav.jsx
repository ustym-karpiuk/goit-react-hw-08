import { Link } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
};

export default AuthNav;