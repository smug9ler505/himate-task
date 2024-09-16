import { Outlet } from "react-router-dom";
import style from "./layout.module.css";
import { Link } from "react-router-dom";
import logo from "/src/assets/icons/logo.svg";
import homeIcon from "/src/assets/icons/home.svg";
import dashboard from "/src/assets/icons/dashboard.svg";
import inbox from "/src/assets/icons/inbox.svg";
import settings from "/src/assets/icons/settings.svg";
import discover from "/src/assets/icons/discover.svg";
import jobs from "/src/assets/icons/jobs.svg";
import useStore from "./store.js";
import logout from "/src/assets/icons/logout.svg";

const Layout = () => {
  const store = useStore();
  return (
    <>
      <div className={style.container}>
        <div className={style.sidebar}>
          <nav className={style.navigation}>
            <Link to={"/"} className={style.logoLink}>
              <div>
                <img src={logo} width={93.05} height={32} alt="" />
              </div>
            </Link>
            <form className={style.search} action="">
              <fieldset className={style.searchBar}>
                <img
                  src={discover}
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />

                <input type="search" placeholder="Search" />
              </fieldset>
            </form>
            <ul>
              <li className={style.navItem}>
                <Link className={style.navLink}>
                  <img src={homeIcon} />
                  Home
                </Link>
              </li>
              <li className={style.navItem}>
                <Link className={style.navLink}>
                  <img src={dashboard} />
                  Dashboard
                </Link>
              </li>
              <li className={style.navItem}>
                <Link className={style.navLink}>
                  <img src={discover} />
                  Discover
                </Link>
              </li>
              <li className={style.navItem}>
                <Link className={style.navLink}>
                  <img src={jobs} />
                  Applied Jobs
                </Link>
              </li>
              <li className={style.navItem}>
                <Link className={style.navLink}>
                  <img src={inbox} />
                  Inbox
                </Link>
              </li>
            </ul>
          </nav>
          <footer className={style.footer}>
            <div className={style.navItem}>
              <Link to={"settings"} className={style.navLink}>
                <img src={settings} alt="" />
                Settings
              </Link>
            </div>
            <div className={style.user}>
              <div className={style.userInfo}>
                <img
                  src={store.user.profilePic}
                  alt=""
                  className={style.profilePic}
                />
                <div>
                  <p className={style.name}>
                    {store.user.firstName} {store.user.lastName}
                  </p>
                  <p className={style.email}>{store.user.email}</p>
                </div>
              </div>
              <Link to={"logout"} className={style.logoutButton}>
                <img src={logout} alt="logout" className={style.logoutIcon} />
              </Link>
            </div>
          </footer>
        </div>
        <div className={style.main}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
