import styles from '../styles/components/ChallangeBox.module.css';


export function ChallangeBox () {
    const hasActiveChallenge = true;

    return(
        <div className={styles.ChallengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.ChallengeActive}>
                    <header>Ganhe 400 xp</header>    

                    <main>
                        <img src="icons/body.svg" alt=""/>
                        <strong>Novo Desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos</p>
                    </main>

                    <footer>
                        <button 
                        type="button"
                        className={styles.ChallengeFailedButton}
                        >
                            Falhei
                        </button>
                        <button 
                        type="button"
                        className={styles.ChallengeSucceededButton}
                        >
                            Completei
                        </button>
                    </footer>

                 </div>
            ) : (
                <div className={styles.ChallengeNotActive}>
                    <strong> Finalize um ciclo para receber um desafios</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                        Avance de Level completando desafios
                    </p>
            </div>
            )}
        </div>
    );
}

