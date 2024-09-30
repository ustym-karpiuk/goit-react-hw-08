import styles from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectFilter } from "../../redux/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectFilter);
  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div>
      <label className={styles.searchContainer}>
        <span className={styles.searchSpan}>Find contacts by name</span>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;