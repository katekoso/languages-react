import styles from '../styles/list.module.scss';
import Button from './Button';
import purple from '../styles/purple-theme.module.scss';
import red from '../styles/red-theme.module.scss';
import redact from '../redact.svg';
import del from '../del.svg';

function ReadWordField(props) {
    const {number, word, translation, transcription, topic} = props;
    return (
        <tr className={styles.row}>
            <th className={styles.cell}>{number}</th>
            <th className={styles.cell}>{word}</th>
            <th className={styles.cell}>{translation}</th>
            <th className={styles.cell}>{transcription}</th>
            <th className={styles.cell}>{topic}</th>
            <th className={styles.buttons}>
                <Button theme={purple} data={redact}></Button>
                <Button theme={red} data={del}></Button>
            </th>
        </tr>
    );
}

export default ReadWordField;