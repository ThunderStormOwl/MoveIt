import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData{
    minutes: number;
    seconds: number;
    isDone: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps{
    children: ReactNode
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({children} : CountdownProviderProps) {

    const { startNewChallenge } = useContext(ChallengesContext)

    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const [isDone, setIsDone] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown(){;
        setIsActive(true);
    }

    function resetCountdown(){ 

        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(25 * 60);
        setIsDone(false);
        console.log(time + " " + isDone)

    }

    useEffect(() => {
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
                setIsDone(false)
            }, 1000);
        }
        else if(isActive && time === 0){
            setIsDone(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

    return(
        <CountdownContext.Provider value ={{
            minutes,
            seconds,
            isDone,
            isActive,
            startCountdown,
            resetCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}