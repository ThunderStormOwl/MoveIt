import { useState } from 'react';
import styles from '../styles/components/NavBarLeaderboard.module.css';

export function NavBarLeaderboardButton(){

    const [isSelected, setIsSelected] = useState(false);

    return (
        <button 
            type="button" 
            className={`${styles.button} ${isSelected ? styles.selected : styles.unselected}`}
            onClick={() => {setIsSelected(!isSelected)}}
        />
    );
}