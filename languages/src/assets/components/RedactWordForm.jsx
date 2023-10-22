import styles from '../styles/list.module.scss';
import Button from './Button';
import green from '../styles/green-theme.module.scss';
import red from '../styles/red-theme.module.scss';
import save from '../images/save.svg';
import cancel from '../images/cancel.svg';

function RedactWordForm(props) {
    const {number, word, translation, transcription, topic} = props;
    return (
    <tr className={styles.row}>
        <th className={styles.cell + ' ' + styles.redact + " " + styles.first}>{number}</th>
        <td className={styles.cell + ' ' + styles.redact}>
            <input className={styles.cell__input} value={word}/>
        </td>
        <td className={styles.cell + ' ' + styles.redact}>
            <input className={styles.cell__input} value={translation}/>
        </td>
        <td className={styles.cell + ' ' + styles.redact}>
            <input className={styles.cell__input} value={transcription}/>
        </td>
        <td className={styles.cell + ' ' + styles.redact}>
            <input className={styles.cell__input} value={topic}/>
        </td>
        <td className={styles.buttons}>
                <Button theme={green} buttonImg={save}></Button>
                <Button theme={red} buttonImg={cancel}></Button>
        </td>
    </tr>
    );
}

export default RedactWordForm;