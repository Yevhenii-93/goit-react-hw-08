import { useSelector } from "react-redux";
import Button from "../Button/Button";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";

export default function UserMenu() {
  const user = useSelector(selectUser);
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome {user.name}</p>
      <Button type="submit" text="Logout" />
    </div>
  );
}
