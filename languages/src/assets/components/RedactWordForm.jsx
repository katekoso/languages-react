import styles from '../styles/list.module.scss';
import Button from './Button';
import green from '../styles/green-theme.module.scss';
import red from '../styles/red-theme.module.scss';
import save from '../save.svg';
import cancel from '../cancel.svg';

function RedactWordForm(props) {
    const {number, word, translation, transcription, topic} = props;
    return (
    <tr className={styles.row}>
        <th>{number}</th>
        <th className={styles.cell + ' ' + styles.redact}>
            <input className={styles.cell__input} value={word}/>
        </th>
        <th className={styles.cell + ' ' + styles.redact}>
            <input className={styles.cell__input} value={translation}/>
        </th>
        <th className={styles.cell + ' ' + styles.redact}>
            <input className={styles.cell__input} value={transcription}/>
        </th>
        <th className={styles.cell + ' ' + styles.redact}>
            <input className={styles.cell__input} value={topic}/>
        </th>
        <th className={styles.buttons}>
                <Button theme={green} data={save}></Button>
                <Button theme={red} data={cancel}></Button>
        </th>
    </tr>
    );
}

export default RedactWordForm;