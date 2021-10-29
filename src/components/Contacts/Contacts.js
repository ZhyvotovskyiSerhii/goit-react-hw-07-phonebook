import PropTypes from "prop-types";
import "./styles.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { getFilterList } from "../../phonebook/phonebook.selectors";
import { removePhoneBookContact } from "../../phonebook/phonebook.operations"

const Contacts = () => {
  const contacts = useSelector(getFilterList);
  const dispatch = useDispatch();
  return (
    <TransitionGroup className="list">
      {contacts.map(({ id, name, number }, i) => (
        <CSSTransition key={i} timeout={500} classNames="item" unmountOnExit>
          <div className="item" key={id}>
            <p className="text">{name} :</p>
            <p className="text">{number}</p>
            <button className="button" onClick={() => dispatch(removePhoneBookContact(id))}>
              X
            </button>
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Contacts;
