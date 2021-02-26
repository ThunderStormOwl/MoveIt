import Cookies from 'js-cookie';
import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from '../../challenges.json'
import { LevelUpModal } from '../components/LevelUpModal';

interface Challenge{
    type: "body" | "eye";
    description: string;
    amount: number;
}

interface ChallengesContextData{
    level: number;
    currentXP: number;
    challengesCompleted: number;
    xpToNextLevel: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void
    completedChallenge: () => void
    closeLvlUpModal: () => void
}

interface ChallengesProviderProps{
    children: ReactNode;
    level: number;
    currentXP: number;
    challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({
    children, 
    ...rest
} :ChallengesProviderProps){
    const[level, setLevel] = useState(rest.level ?? 1);
    const[currentXP, setCurrentXp] = useState(rest.currentXP ?? 0);
    const[challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
    const[activeChallenge, setActiveChallenge] = useState(null);
    const[isLvlUpModalOpen, setIsLvlUpModalOpen] = useState(false);

    const xpToNextLevel = Math.pow((level+1) * 4, 2)

    useEffect(()=>{
        Notification.requestPermission();
    },[])

    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentXP', String(currentXP));
        Cookies.set('challengesCompleted', String(challengesCompleted));
    }, [level, currentXP, challengesCompleted])

    function levelUp(){
        setLevel(level + 1);
        setIsLvlUpModalOpen(true);
    }

    function closeLvlUpModal(){
        setIsLvlUpModalOpen(false);
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);

        new Audio("/notification.mp3").play();

        if(Notification.permission === "granted"){
            new Notification('New Challenge 😎', {
                body: `worth ${challenge.amount} XP`,
                silent: true
            })
        }
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    function completedChallenge(){

        if(!activeChallenge){
            return;
        }

        const {amount} = activeChallenge;

        let finalXP = amount + currentXP;

        if(finalXP >= xpToNextLevel){
            finalXP = finalXP - xpToNextLevel;
            levelUp();
        }

        setCurrentXp(finalXP);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
    }

    return (
        <ChallengesContext.Provider 
            value={{
                level,
                currentXP,
                challengesCompleted,
                xpToNextLevel,
                activeChallenge,
                levelUp,
                startNewChallenge,
                resetChallenge,
                completedChallenge,
                closeLvlUpModal
            }}
        >
            {children}
            {isLvlUpModalOpen && <LevelUpModal />}
        </ChallengesContext.Provider>
    );
}