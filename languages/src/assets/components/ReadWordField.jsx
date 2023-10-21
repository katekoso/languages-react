import styles from '../styles/list.module.scss';
import Button from './Button';
import purple from '../styles/purple-theme.module.scss';
import red from '../styles/red-theme.module.scss';
import redact from '../redact.svg';
import del from '../del.svg';

function ReadWordField(props) {
    const {number, word, translation, transcription, topic} = props;
    return (
        <div className={styles.row}>
            <div className={styles.cell}>{number}</div>
            <div className={styles.cell}>{word}</div>
            <div className={styles.cell}>{translation}</div>
            <div className={styles.cell}>{transcription}</div>
            <div className={styles.cell}>{topic}</div>
            <div className={styles.buttons}>
                <Button theme={purple} data={redact}></Button>
                <Button theme={red} data={del}></Button>
            </div>
        </div>
    );
}

export default ReadWordField;