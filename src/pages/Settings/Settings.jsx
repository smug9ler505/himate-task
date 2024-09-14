import { Outlet } from "react-router-dom";
import style from "./settings.module.css";
import { Link } from "react-router-dom";
import add from "/src/assets/icons/add.svg";
import { useRef } from "react";
import TaskForm from "./WorkExperience/components/TaskForm";

const Settings = () => {
  const modal = useRef(null);
  const handleAddExp = () => {
    modal.current.showModal();
  };

  return (
    <>
      <div className={style.settings}>
        <header className={style.header}>
          <h1>Settings</h1>
          <nav className={style.navigation}>
            <ul className={style.navList}>
              <li>
                <Link to={"/profile"}>Profile</Link>
              </li>
              <li>
                <Link to={"/work-experience"}>Work Experience</Link>
              </li>
              <li>
                <Link to={"/education"}>Education</Link>
              </li>
              <li>
                <Link to={"/education"}>Preferences</Link>
              </li>
              <li>
                <Link to={"/notifications"}>Notifications</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className={style.main}>
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
        </main>
        <Outlet />
      </div>
    </>
  );
};

export default Settings;
