import { Head } from 'next/document'
import styles from '../styles/components/SideNavBar.module.css'

export function SideNavBar() {

    return(
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img src="/icons/navbar-icons/logo.svg" alt="oops"/>
            </div>
            <div className={styles.buttonsContainer}>
                <button type="button" className={styles.homeButton}/>
                <button type="button" className={styles.leaderboardButton}/>
            </div>
        </div>
    )
}