import { useEffect } from "react";
import ContactList from "../../components/contactList/ContactList";
import SearchBox from "../../components/searchBox/SearchBox";
import ContactForm from "../../components/contactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading, selectError } from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList/>
    </div>
  );
};

export default ContactsPage;