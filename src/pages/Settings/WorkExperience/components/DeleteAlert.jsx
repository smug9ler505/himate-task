import { Controller, useForm } from "react-hook-form";
import style from "./TaskForm.module.css";
import flag from "/src/assets/icons/flag.svg";
import { forwardRef } from "react";
import closeX from "/src/assets/icons/close.svg";
import DatePicker from "react-datepicker";
import calendar from "/src/assets/icons/calendar.svg";
import search from "/src/assets/icons/discover.svg";
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
          <strong>Delete experience</strong>
          <div>
            Are you sure you want to delete this experience? This action cannot
            be undone.
          </div>
        </div>
        <div className={style.actions}>
          <button type="button" onClick={() => ref.current.close()}>
            Cancel
          </button>
          <button type="button" onClick={() => handleClick(id)}>
            Delete
          </button>
        </div>
      </div>
    </dialog>
  );
});

export default DeleteAlert;
