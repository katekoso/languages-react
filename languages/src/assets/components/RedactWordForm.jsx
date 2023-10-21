import styles from '../styles/list.module.scss';
import Button from './Button';
import green from '../styles/green-theme.module.scss';
import red from '../styles/red-theme.module.scss';
import save from '../save.svg';
import cancel from '../cancel.svg';

function RedactWordForm(props) {
    const {number, word, translation, transcription, topic} = props;
    return (
    <form className={styles.form}>
        <div>{number}</div>
        <div className={styles.cell + styles.redact}>
            <input className={styles.cell__input} value={word}/>
        </div>
        <div className={styles.cell + styles.redact}>
            <input className={styles.cell__input} value={translation}/>
        </div>
        <div className={styles.cell + styles.redact}>
            <input className={styles.cell__input} value={transcription}/>
        </div>
        <div className={styles.cell + styles.redact}>
            <input className={styles.cell__input} value={topic}/>
        </div>
        <div className={styles.buttons}>
                <Button theme={green} data={save}></Button>
                <Button theme={red} data={cancel}></Button>
        </div>
    </form>
    );
}

export default RedactWordForm;