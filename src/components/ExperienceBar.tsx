import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar(){

    const {currentXP, xpToNextLevel} = useContext(ChallengesContext);

    const percentToNextLevel = Math.round((currentXP) * 100) / xpToNextLevel

    return(
        <header className={styles.experienceBar}>
            <span>0 XP</span>
            <div>
                <div style={{width: `${percentToNextLevel}%`}}/>
                <span className={styles.currentExperience} style={{left: `${percentToNextLevel}%`}}>
                    {currentXP} XP
                </span>
            </div>
            <span>{xpToNextLevel} XP</span>
        </header>
    );

}