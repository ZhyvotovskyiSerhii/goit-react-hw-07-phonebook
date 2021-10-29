import React, { useEffect } from "react";
import { generate } from "shortid";
import styles from "./App.module.css";
import Section from "./Section";
import Form from "./Form";
import Contacts from "./Contacts";
import ContactsFilter from "./Contacts/ContactsFilter";
import Alert from "./Alert";
import { useDispatch, useSelector } from "react-redux";
import { getPhoneBookContacts, addPhoneBookContact, removePhoneBookContact, changePhoneBookFilter }  from "../phonebook/phonebook.operations"
import { getContacts, getFilter, getError} from "../phonebook/phonebook.selectors"

const App = ({
  // items,
  // filter,
  // error: apiError,
  // getPhoneBookContacts,
  // addPhoneBookContact,
  // removePhoneBookContact,
  // changePhoneBookFilter,
}) => {

  const items = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const error = useSelector(getError);

  // const [error, setError] = useState("");

  // const handleError = (e) => {
  //   setError(e);

  //   setTimeout(() => {
  //     setError("");
  //   }, 2000);
  // };
 
  const dispatch = useDispatch();


  useEffect(() => dispatch(getPhoneBookContacts()), []);

  // useEffect(() => dispatch(handleError(apiError)), [apiError]);

  // useEffect(() => dispatch(getPhoneBookContacts(filter)), [filter]);

  const addNewContact = ({ name, number }) => {
    const isAlreadyExist = items.find(
      (contact) => contact.name === name || contact.number === number
    );
    if (isAlreadyExist) {
      return alert((`${name} is already in contacts`));
    } else {
      dispatch(addPhoneBookContact({
        id: generate(),
        name,
        number,
      }));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles["form-container"]}>
        <Section title={"Phonebook"}>
          <Form onSubmit={addNewContact} />
        </Section>

        <Section>
          <div className={styles.container}>
            <ContactsFilter
              value={filter}
              onChange={(e) => dispatch(changePhoneBookFilter(e.target.value))}
            />
            <Contacts
              // contacts={items}
              // onDelete={(contactId) => removePhoneBookContact(contactId)}
            />
          </div>
        </Section>
      </div>
      <Alert visible={Boolean(error)} error={error} />
    </div>
  );
};



export default App;
