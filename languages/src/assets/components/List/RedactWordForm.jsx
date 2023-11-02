import {useState} from 'react';
import styles from './list.module.scss';
import Button from './Button';
import green from '../../styles/themes/green-theme.module.scss';
import red from '../../styles/themes/red-theme.module.scss';
import save from '../../images/save.svg';
import cancel from '../../images/cancel.svg';
import ReadWordField from './ReadWordField';

function RedactWordForm(props) {
    const {id, english, russian, transcription, tags} = props;
    const [valueWord, setValueWord] = useState(english);
    const [valueTranslation, setValueTranslation] = useState(russian);
    const [valueTranscription, setValueTranscription] = useState(transcription);
    const [valueTopic, setValueTopic] = useState(tags);
    let [redacted, setRedacted] = useState(true);

    const handleClick = () => {
        setRedacted(redacted = false);
    }

    return (
        <>
        {
            redacted 
            ?  <tr className={styles.row}>
            <th className={styles.cell + " " + styles.first}>{id}</th>
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
        : <ReadWordField id={id} english={english} russian={russian} transcription={transcription} tags={tags} key={id}/>
        }
     </>
    );
}

export default RedactWordForm;