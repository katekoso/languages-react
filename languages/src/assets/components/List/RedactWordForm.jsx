import {useState} from 'react';
import styles from './list.module.scss';
import Button from './Button';
import green from '../../styles/themes/green-theme.module.scss';
import red from '../../styles/themes/red-theme.module.scss';
import save from '../../images/save.svg';
import cancel from '../../images/cancel.svg';

function RedactWordForm(props) {
    const {number, word, translation, transcription, topic} = props;
    const [valueWord, setValueWord] = useState(word);
    const [valueTranslation, setValueTranslation] = useState(translation);
    const [valueTranscription, setValueTranscription] = useState(transcription);
    const [valueTopic, setValueTopic] = useState(topic);
    return (
    <tr className={styles.row}>
        <th className={styles.cell + ' ' + styles.redact + " " + styles.first}>{number}</th>
        <td className={styles.cell + ' ' + styles.redact}>
            <input className={styles.cell__input} value={valueWord} onChange={event => setValueWord(event.target.valueWord)}/>
        </td>
        <td className={styles.cell + ' ' + styles.redact}>
            <input className={styles.cell__input} value={valueTranslation} onChange={event => setValueTranslation(event.target.valueTranslation)}/>
        </td>
        <td className={styles.cell + ' ' + styles.redact}>
            <input className={styles.cell__input} value={valueTranscription} onChange={event => setValueTranscription(event.target.valueTranscription)}/>
        </td>
        <td className={styles.cell + ' ' + styles.redact}>
            <input className={styles.cell__input} value={valueTopic} onChange={event => setValueTopic(event.target.valueTopic)}/>
        </td>
        <td className={styles.buttons}>
                <Button theme={green} buttonImg={save}></Button>
                <Button theme={red} buttonImg={cancel}></Button>
        </td>
    </tr>
    );
}

export default RedactWordForm;