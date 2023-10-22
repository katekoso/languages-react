import styles from '../styles/list.module.scss';
import Button from './Button';
import purple from '../styles/purple-theme.module.scss';
import red from '../styles/red-theme.module.scss';
import redact from '../images/redact.svg';
import del from '../images/del.svg';

function ReadWordField(props) {
    const {number, word, translation, transcription, topic} = props;
    return (
        <tr className={styles.row}>
            <th className={styles.cell  + " " + styles.first}>{number}</th>
            <td className={styles.cell}>{word}</td>
            <td className={styles.cell}>{translation}</td>
            <td className={styles.cell}>{transcription}</td>
            <td className={styles.cell}>{topic}</td>
            <td className={styles.buttons}>
                <Button theme={purple} buttonImg={redact}></Button>
                <Button theme={red} buttonImg={del}></Button>
            </td>
        </tr>
    );
}

export default ReadWordField;