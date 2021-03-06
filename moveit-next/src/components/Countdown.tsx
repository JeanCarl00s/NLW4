import { CONNREFUSED } from 'dns';
import { useState, useEffect } from 'react';
import sytles from '../styles/components/Countdown.module.css'

    let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor (time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRigth] = String(minutes).padStart (2, '0').split ('');
    const [secondLeft, secondRigth] = String(seconds).padStart (2, '0').split ('');

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time == 0){
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time])

    

    return (
        <div>
            <div className={sytles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRigth}</span>
                </div>
                <span>:</span>
                <div> 
                    <span>{secondLeft}</span>
                    <span>{secondRigth}</span>
                </div>
            </div>

            {hasFinished ? (
                <button 
                disabled
                className={sytles.countdownButton}
            >
                Ciclo Encerrado
           </button>
            ) : (
                <>
                { isActive ? (
                <button 
                    type="button" 
                    className={`${sytles.countdownButton} ${sytles.countdownButtonActive}`}
                    onClick= {resetCountdown}
                >
                   Abandonar ciclo
               </button>
            ) : (
                <button 
                    type="button" 
                    className={sytles.countdownButton}
                    onClick= {startCountdown}
                >
                    Iniciar um ciclo
                </button>
            ) }
                </>
            )}

            

    
        </div>
    );
}