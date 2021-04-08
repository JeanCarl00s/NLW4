import styles from '../styles/components/Profile.module.css';


export function Profile () {
    return(
        <div className={styles.ProfileContainer}>
            <img src="https://github.com//JeanCarl00s.png" alt=" Jean Fernandes "/>
            <div>
                <strong> Jean Fernandes </strong>
                <p>
                <img src="icons/level.svg" alt=""/>
                Level 1</p>
            </div>
        </div>
    );
}