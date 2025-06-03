import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBar from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectLoading } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>

      {loading && <Loader>Loading tasks, please wait...</Loader>}
      {error ? (
        <Error />
      ) : (
        <>
          <ContactForm />

          <SearchBar />

          <ContactList />
        </>
      )}
    </>
  );
}

export default App;
