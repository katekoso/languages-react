import {useState, useEffect} from 'react';
import styles from './list.module.scss';
import Button from './Button';
import green from '../../styles/themes/green-theme.module.scss';
import red from '../../styles/themes/red-theme.module.scss';
import save from '../../images/save.svg';
import cancel from '../../images/cancel.svg';
import ReadWordField from './ReadWordField';

function RedactWordForm({ id, english, russian, transcription, tags }) {
    let [redacted, setRedacted] = useState(true);
    let [empty, setEmpty] = useState(false);
    const [state, setState] = useState({
        valueWord: english,
        valueTranslation: russian,
        valueTranscription: transcription,
        valueTopic: tags
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    }

    const handleClick = () => {
        setRedacted(redacted = false);
    }

    useEffect(() => {
        if (state.valueWord.trim().length === 0 || state.valueTranslation.trim().length === 0 || state.valueTranscription.trim().length === 0 || state.valueTopic.trim().length === 0) {
            setEmpty(empty = true);
        } else {
            setEmpty(empty = false);
        }    
    }, [state.valueWord, state.valueTranslation, state.valueTranscription, state.valueTopic]);

    return (
        <>
        {
            redacted 
            ?  <tr className={styles.row}>
            <th className={styles.cell + " " + styles.first}>{id}</th>
            <td className={styles.cell}>
                <input className={state.valueWord.trim().length === 0 ? styles.cell__input + ' ' + styles.error : styles.cell__input + ' ' + styles.correct} name="valueWord" value={state.valueWord} onChange={handleChange}/>
            </td>
            <td className={styles.cell}>
                <input className={state.valueTranslation.trim().length === 0 ? styles.cell__input + ' ' + styles.error : styles.cell__input + ' ' + styles.correct} name="valueTranslation" value={state.valueTranslation} onChange={handleChange}/>
            </td>
            <td className={styles.cell}>
                <input className={state.valueTranscription.trim().length === 0 ? styles.cell__input + ' ' + styles.error : styles.cell__input + ' ' + styles.correct} name="valueTranscription" value={state.valueTranscription} onChange={handleChange}/>
            </td>
            <td className={styles.cell}>
                <input className={state.valueTopic.trim().length === 0 ? styles.cell__input + ' ' + styles.error : styles.cell__input + ' ' + styles.correct} name="valueTopic" value={state.valueTopic} onChange={handleChange}/>
            </td>
            <td className={styles.buttons}>
                    <Button theme={green} buttonImg={save} disabled={empty}></Button>
                    <Button theme={red} buttonImg={cancel} onClick={handleClick}></Button>
            </td>
        </tr>
        : <ReadWordField id={id} english={english} russian={russian} transcription={transcription} tags={tags} key={id}/>
        }
     </>
    );
}

export default RedactWordForm;