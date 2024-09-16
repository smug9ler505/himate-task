import style from "./DeleteAlert.module.css";
import flag from "/src/assets/icons/flag.svg";
import { forwardRef } from "react";
import closeX from "/src/assets/icons/close.svg";
import useStore from "/src/store.js";

// eslint-disable-next-line react/display-name
const DeleteAlert = forwardRef(({ id }, ref) => {
  console.log(id);
  const store = useStore();
  const handleClick = (id) => {
    store.removeExp(id);
    ref.current.close();
    console.log(store.user);
  };
  return (
    <dialog className={style.dialog} ref={ref}>
      <div className={style.container}>
        <div className={style.top}>
          <div>
            <img src={flag} alt="Flag" />
          </div>
          <button title="Close" onClick={() => ref.current.close()}>
            <img src={closeX} alt="" />
          </button>
        </div>
        <div>
          <h2>Delete experience</h2>
          <p>
            Are you sure you want to delete this experience? This action cannot
            be undone.
          </p>
        </div>
        <div className={style.actions}>
          <button
            type="button"
            onClick={() => ref.current.close()}
            title="Cancel"
            className={style.btnAction}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => handleClick(id)}
            title="Delete"
            className={style.btnAction}
          >
            Delete
          </button>
        </div>
      </div>
    </dialog>
  );
});

export default DeleteAlert;
