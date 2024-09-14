import { useRef } from "react";
import style from "./ExperienceCard.module.css";
import TaskForm from "./TaskForm";
import remove from "/src/assets/icons/delete.svg";
import modify from "/src/assets/icons/modify.svg";
import DeleteAlert from "./DeleteAlert";

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-us", {
    month: "short",
    year: "numeric",
  });
};

const ExperienceCard = ({ experience }) => {
  const addModal = useRef(null);
  const alertModal = useRef(null);
  return (
    <div className={style.card}>
      <div className={style.expInfo}>
        <h5>{experience.position}</h5>
        <p>
          {experience.company} / {experience.employmentType}
        </p>
        <p>
          {formatDate(experience.startDate)} /{" "}
          {experience.current ? "Present" : formatDate(experience.endDate)}
        </p>
      </div>
      <div className={style.actions}>
        <button
          className={style.btnAction}
          onClick={() => alertModal.current.showModal()}
          title="Delete"
        >
          <img src={remove} alt="" />
        </button>
        <button
          className={style.btnAction}
          onClick={() => addModal.current.showModal()}
          title="Modify"
        >
          <img src={modify} />
        </button>
      </div>
      <TaskForm exp={experience} ref={addModal} />
      <DeleteAlert id={experience.id} ref={alertModal} />
    </div>
  );
};

export default ExperienceCard;
