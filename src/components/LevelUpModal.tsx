import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal () {

    const {level, closeLvlUpModal} = useContext(ChallengesContext)

    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                
                <strong>Congratulations! 🥳</strong>
                <p>You have reached a new level!</p>

                <button type="button" onClick={closeLvlUpModal}>
                    <img src="/icons/close.svg" alt="Close modal"/>
                </button>
            </div>
        </div>
    )
}