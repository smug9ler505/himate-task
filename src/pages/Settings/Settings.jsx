import { Outlet } from "react-router-dom";
import style from "./settings.module.css";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <>
      <div className={style.settings}>
        <header className={style.header}>
          <h1>Settings</h1>
          <nav className={style.navigation}>
            <ul className={style.navList}>
              <li>
                <Link to={"profile"}>Profile</Link>
              </li>
              <li>
                <Link to={"work-experience"}>Work Experience</Link>
              </li>
              <li>
                <Link to={"education"}>Education</Link>
              </li>
              <li>
                <Link to={"preferences"}>Preferences</Link>
              </li>
              <li>
                <Link to={"notifications"}>Notifications</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Outlet />
      </div>
    </>
  );
};

export default Settings;
