import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import css from "./Contacts.module.css";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ name, number }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <div className={css.contactInfo}>
        <div className={css.contacts}>
          <FaPhoneAlt />
          <p className={css.contactText}>{name}</p>
        </div>
        <div className={css.contacts}>
          <FaUserAlt />
          <p className={css.contactText}>{number}</p>
        </div>
      </div>
      <Button type="button" text="Delete" onClick={handleDelete} />
    </div>
  );
}
