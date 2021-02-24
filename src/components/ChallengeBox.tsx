import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){

    const isChallengeReady = true;

    return(
        <div className={styles.ChallengeBoxContainer}>
            { isChallengeReady ? (
                <div className={styles.challengeActive}>
                    <header>Gain 400 xp</header>
                    <main>
                        <img src="icons/body.svg"/>
                        <strong>New challenge</strong>
                        <p>Get up and walk for 3 minutes.</p>
                    </main>
                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                        >
                            :(
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                        >
                            \o/
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