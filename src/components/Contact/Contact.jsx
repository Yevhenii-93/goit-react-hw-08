import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import css from "./Contacts.module.css";
import { useDispatch } from "react-redux";

export default function Contact({ name, number }) {
  const dispatch = useDispatch();

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
    </div>
  );
}
