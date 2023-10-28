import {useState} from 'react';
import styles from './card.module.scss';

function Card(props) {
    const {word, translation, transcription} = props;
    let [hidden, setHidden] = useState(false);

    const handleClick = () => {
        setHidden(!hidden);
    }

    return (
        <div className={styles.card}>
            <div className={styles.card__main}>
                <span className={styles.main__word}>{word}</span>
                <span className={styles.main__transcription}>{transcription}</span>
            </div>
            <div className={styles.card__check} onClick={handleClick}>
                {
                    hidden
                    ? <span className={styles.check__text}>{translation}</span>
                    : <button className={styles.check__button}>Проверить</button>
                }
            </div>
        </div>
    );
}

export default Card;