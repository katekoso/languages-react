import {useState} from 'react';
import styles from './list.module.scss';
import Button from './Button';
import green from '../../styles/themes/green-theme.module.scss';
import red from '../../styles/themes/red-theme.module.scss';
import save from '../../images/save.svg';
import cancel from '../../images/cancel.svg';
import ReadWordField from './ReadWordField';

function RedactWordForm(props) {
    const {number, word, translation, transcription, topic} = props;
    const [valueWord, setValueWord] = useState(word);
    const [valueTranslation, setValueTranslation] = useState(translation);
    const [valueTranscription, setValueTranscription] = useState(transcription);
    const [valueTopic, setValueTopic] = useState(topic);
    let [redacted, setRedacted] = useState(true);

    const handleClick = () => {
        setRedacted(redacted = false);
    }

    return (
        <>
        {
            redacted 
            ?  <tr className={styles.row}>
            <th className={styles.cell + " " + styles.first}>{number}</th>
            <td className={styles.cell}>
                <input className={styles.cell__input} value={valueWord} onChange={event => setValueWord(event.target.valueWord)}/>
            </td>
            <td className={styles.cell}>
                <input className={styles.cell__input} value={valueTranslation} onChange={event => setValueTranslation(event.target.valueTranslation)}/>
            </td>
            <td className={styles.cell}>
                <input className={styles.cell__input} value={valueTranscription} onChange={event => setValueTranscription(event.target.valueTranscription)}/>
            </td>
            <td className={styles.cell}>
                <input className={styles.cell__input} value={valueTopic} onChange={event => setValueTopic(event.target.valueTopic)}/>
            </td>
            <td className={styles.buttons}>
                    <Button theme={green} buttonImg={save}></Button>
                    <Button theme={red} buttonImg={cancel} onClick={handleClick}></Button>
            </td>
        </tr>
        : <ReadWordField number={number} word={word} translation={translation} transcription={transcription} topic={topic} key={number}/>
        }
     </>
    );
}

export default RedactWordForm;