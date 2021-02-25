import { useContext, useEffect, useState } from 'react';
import {CountdownContext} from '../contexts/CountdownContext'
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){

    const { 
        minutes, 
        seconds, 
        isDone, 
        isActive, 
        resetCountdown, 
        startCountdown
    } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return(
    <div>
        <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>
        {isDone ? (
            <button 
            disabled
            className={styles.countdownButton}
            >
            Cycle finished
            </button> 
        ) : (
            isActive? (
                <button 
                    type="button" 
                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick={resetCountdown}
                >
                    Abandon cycle
                </button>
            ) : ( 
                <button 
                    type="button" 
                    className={`${styles.countdownButton} ${styles.countdownButtonInactive}`}
                    onClick={startCountdown}
                >
                    Start cycle
                </button>
            )
        )}
    </div>
    )
} 