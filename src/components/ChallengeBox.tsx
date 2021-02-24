import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){

    const { activeChallenge, resetChallenge } = useContext(ChallengesContext)

    return(
        <div className={styles.ChallengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Gain {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>New challenge!</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={resetChallenge}
                        >
                            Couldn't do it :(
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                        >
                            I did it! \o/
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Begin a cycle to receive a new challenge!</strong>
                    <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Gain levels by completing challenges
                    </p>
                </div>
            )}
        </div>
    );
}