import css from "./App.module.css";

import Layout from "../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  const isRefreshing = useSelector(selectIsRefreshing);
  return isRefreshing ? (
    <p>Please wait...</p>
  ) : (
    <div className={css.wrapper}>
      <Layout />
    </div>
  );
}

export default App;