import styles from "./Navbar.module.css";


const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">SKILLS</a></li>
          <li><a href="#">PORTFOLIO</a></li>
          <li><a href="#">EXPERIENCE</a></li>
          <li><a href="#">PRICING</a></li>
          <li><a href="#">BLOG</a></li>
          <li><a href="#">CALENDAR</a></li>
          <li><a href="#">CONTACT</a></li>
          <li className={styles['other-dropdown']}>
            <a href="#">OTHER <i className={styles['fas fa-caret-down']}></i></a>
            <ul className={styles['dropdown-content']}>
              <li><a href="#">Sub Item 1</a></li>
              <li><a href="#">Sub Item 2</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
