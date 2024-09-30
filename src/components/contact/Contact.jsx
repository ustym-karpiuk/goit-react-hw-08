import { MdPhoneIphone } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.contactStyle}>
      <li key={id}>
        <div className={styles.textContainer}>
          <BiSolidContact className={styles.svg} />
          <p className={styles.textStyle}>Name: {name}</p>
        </div>
        <div className={styles.textContainer}>
          <MdPhoneIphone className={styles.svg} />
          <p className={styles.textStyle}>Number: {number}</p>
        </div>
      </li>
      <button className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>     
    </div>
  );
};

export default Contact;