import css from "./SearchBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { useDebounce } from "use-debounce";
import { useEffect, useState } from "react";

export default function SearchBox() {
  const filter = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const [name, setName] = useState(filter);
  const [debouncedName] = useDebounce(name, 300);

  useEffect(() => {
    dispatch(changeFilter(debouncedName));
  }, [debouncedName, dispatch]);

  return (
    <div className={css.container}>
      <input
        className={css.search}
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
