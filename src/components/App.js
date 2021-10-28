import React, { useState, useEffect } from "react";
import { generate } from "shortid";
import styles from "./App.module.css";
import Section from "./Section";
import Form from "./Form";
import Contacts from "./Contacts";
import ContactsFilter from "./Contacts/ContactsFilter";
import Alert from "./Alert";
import { connect } from "react-redux";
import * as actions from "../actions/PhoneBook";
import axios from "axios";
const App = ({
  items,
  filter,
  addContact,
  removeContact,
  filterContact,
  setContacts,
}) => {
  const [error, setError] = useState("");

  const handleError = (e) => {
    setError(e);

    setTimeout(() => {
      setError("");
    }, 2000);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3002/contacts")
      .then(({ data }) => setContacts({ items: data }))
      .catch((e) => handleError(e.message));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3002/contacts?name_like=" + filter)
      .then(({ data }) => setContacts({ items: data }))
      .catch((e) => handleError(e.message));
  }, [filter]);

  const addNewContact = ({ name, number }) => {
    const isAlreadyExist = items.find(
      (contact) => contact.name === name || contact.number === number
    );
    if (isAlreadyExist) {
      handleError(`${name} is already in contacts`);
    } else {
      axios
        .post("http://localhost:3002/contacts", {
          id: generate(),
          name,
          number,
        })
        .then(({ data }) =>
          addContact({
            item: data,
          })
        )
        .catch((e) => handleError(e.message));
    }
  };

  const deleteContact = (contactId) => {
    axios
      .delete("http://localhost:3002/contacts/" + contactId)
      .then(() => removeContact({ id: contactId }))
      .catch((e) => handleError(e.message));
  };

  const changeFilter = (e) => {
    filterContact({ filter: e.target.value });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles["form-container"]}>
        <Section title={"Phonebook"}>
          <Form onSubmit={addNewContact} />
        </Section>

        <Section>
          <div className={styles.container}>
            <ContactsFilter value={filter} onChange={changeFilter} />
            <Contacts contacts={items} onDelete={deleteContact} />
          </div>
        </Section>
      </div>
      <Alert visible={Boolean(error)} error={error} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.phoneBook.items,
  filter: state.phoneBook.filter,
});

export default connect(mapStateToProps, { ...actions })(App);
