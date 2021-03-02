import { NavBarHomeButton } from './NavBarHomeButton';
import { NavBarLeaderboardButton } from './NavBarLeaderboardButton';

import styles from '../styles/components/SideNavBar.module.css'

export function SideNavBar() {

    return(
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img src="/icons/navbar-icons/logo.svg" alt="oops"/>
            </div>
            <div className={styles.buttonsContainer}>
                <NavBarHomeButton />
                <NavBarLeaderboardButton />
            </div>
        </div>
    )
}