import { Link, useLocation } from 'react-router-dom';
import styles from './NavBar.module.css';
import { FaUsers, FaImages } from 'react-icons/fa';
import { IoMusicalNotes } from "react-icons/io5";
import { GiMicrophone } from "react-icons/gi";

function NavBar() {
    const location = useLocation();
    let pageTitle = '';
    switch (location.pathname) {
        case '/integrantes':
            pageTitle = 'Integrantes';
            break;
        case '/album':
            pageTitle = 'Album';
            break;
        case '/shows':
            pageTitle = 'Shows';
            break;
        default:
            pageTitle = 'Banda';
    }

    return (
        <header>
            <nav className={styles.navBar}>
                <div className={styles.navContent}>
                    <div className={styles.topContainer}>
                        <div className={styles.logoContainer}>
                            <img
                                src="/Static/Images/favicon/favicon.svg"
                                alt="Side Rock Logo"
                                className={styles.logo}
                            />
                        </div>
                        <span className={styles.title}>{pageTitle} Side Rock</span>
                    </div>
                    <div className={styles.navContainer}>
                        <Link to="/banda" className={`${styles.navLink} ${pageTitle === 'Banda' ? styles.navLinkActive : ''}`}>
                            <IoMusicalNotes className={styles.navIcon} /> Banda
                        </Link>
                        <Link to="/integrantes" className={`${styles.navLink} ${pageTitle === 'Integrantes' ? styles.navLinkActive : ''}`}>
                            <FaUsers className={styles.navIcon} /> Integrantes
                        </Link>
                        <Link to="/album" className={`${styles.navLink} ${pageTitle === 'Album' ? styles.navLinkActive : ''}`}>
                            <FaImages className={styles.navIcon} /> Album
                        </Link>
                        <Link to="/shows" className={`${styles.navLink} ${pageTitle === 'Shows' ? styles.navLinkActive : ''}`}>
                            <GiMicrophone  className={styles.navIcon} /> Shows
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;