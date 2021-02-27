import { Head } from 'next/document'
import styles from '../styles/components/SideNavBar.module.css'

export function SideNavBar() {

    return(
        <div className={styles.container}>
            <header>
                <img src="/NavBar-Logo.svg" />
            </header>
        </div>
    )
}