import ExperienceCard from "./components/ExperienceCard";
import style from "./workexperience.module.css";
import useStore from "/src/store.js";
const WorkExperience = () => {
  const store = useStore();
  return (
    <>
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
