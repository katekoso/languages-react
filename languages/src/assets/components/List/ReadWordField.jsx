import {useState} from 'react';
import styles from './list.module.scss';
import Button from './Button';
import purple from '../../styles/themes/purple-theme.module.scss';
import red from '../../styles/themes/red-theme.module.scss';
import redact from '../../images/redact.svg';
import del from '../../images/del.svg';
import RedactWordForm from './RedactWordForm';

function ReadWordField(props) {
    const {id, english, russian, transcription, tags} = props;
    let [redacted, setRedacted] = useState(false);

    const handleClick = () => {
        setRedacted(redacted = true);
    }

    return (
        <>
        {
            redacted 
            ? <RedactWordForm id={id} english={english} russian={russian} transcription={transcription} tags={tags} key={id}/>
            : <>
            <tr className={styles.row}>
            <th className={styles.cell  + " " + styles.first}>{id}</th>
            <td className={styles.cell}>{english}</td>
            <td className={styles.cell}>{russian}</td>
            <td className={styles.cell}>{transcription}</td>
            <td className={styles.cell}>{tags}</td>
            <td className={styles.buttons}>
                <Button theme={purple} buttonImg={redact} onClick={handleClick}></Button>
                <Button theme={red} buttonImg={del} ></Button>
              </td>
            </tr>
            </>
        }
        </>
    );
}


export default ReadWordField;