import Contact from "../contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import { deleteContact } from "../../redux/contacts/operations";

const ContactList = () => {

  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts && filteredContacts.length > 0 ? (
      filteredContacts.map((contact) => (
        <Contact key={contact.id}
        {...contact}
        onDelete = {handleDelete} />
      ))
    ) : ( 
    <p>No contacts available</p>
    )}
    </ul>
  );
};

export default ContactList;