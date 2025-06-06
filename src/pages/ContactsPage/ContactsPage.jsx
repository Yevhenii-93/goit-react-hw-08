import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader";
import ContactForm from "../../components/ContactForm/ContactForm";
import { NavLink, Outlet } from "react-router-dom";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <h2>Contacts</h2>
      <NavLink to="search">Search contact</NavLink>
      <Outlet />
      {loading && <Loader />}
      <ContactList />
    </>
  );
}
