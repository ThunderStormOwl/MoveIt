import { useState } from 'react';
import styles from '../styles/components/NavBarHomeButton.module.css';

export function NavBarHomeButton (){

    const [isSelected, setIsSelected] = useState(false);

    return (
        <button 
            type="button" 
            className={`${styles.button} ${isSelected ? styles.selected : styles.unselected}`}
            onClick={() => {setIsSelected(!isSelected)}}
        />
            
    );
}