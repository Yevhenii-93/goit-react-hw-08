import { useSelector } from "react-redux";
import css from "./Error.module.css";
import { selectError } from "../../redux/contactsSlice";

export default function Error() {
  const error = useSelector(selectError);
  return (
    <p className={css.text}>
      <b>{error}</b>
    </p>
  );
}
