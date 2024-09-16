import { useRef } from "react";
import ExperienceCard from "./components/ExperienceCard";
import TaskForm from "./components/TaskForm";
import style from "./workexperience.module.css";
import useStore from "/src/store.js";
import add from "/src/assets/icons/add.svg";

const WorkExperience = () => {
  const store = useStore();
  const modal = useRef(null);
  const handleAddExp = () => {
    modal.current.showModal();
  };
  return (
    <>
      <div className={style.addExp}>
        <div>
          <h2>Work experience</h2>
          <p>Enhance your visibility by adding work experience.</p>
        </div>
        <button
          className={style.addButton}
          onClick={() => handleAddExp()}
          type="button"
        >
          <img src={add} alt="" />
          Add Experience
        </button>
      </div>
      <TaskForm ref={modal} />
      <div className={style.experienceContainer}>
        <div className={style.expText}>
          <h5>Experience</h5>
          <p>
            {`Elevate your profile's appeal by providing detailed work
                experience.`}
          </p>
        </div>
        <div className={style.experienceList}>
          {store.user.experience.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
