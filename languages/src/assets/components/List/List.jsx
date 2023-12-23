import { useContext, useEffect, useState } from 'react';
import styles from './list.module.scss';
import ReadWordField from './ReadWordField';
import { DataContext } from '../DataContextProvider/DataContextProvider';
import Button from './Button';
import green from '../../styles/themes/green-theme.module.scss';
import red from '../../styles/themes/red-theme.module.scss';
import save from '../../images/save.svg';
import cancel from '../../images/cancel.svg';
import checkEmpty from '../../scripts/checkEmpty';
import Error from '../Errors/Error';

function List() {
    const { words, addWord, error } = useContext(DataContext);
    let [empty, setEmpty] = useState(true);
    let [addRow, setAddRow] = useState(false);
    const [newWord, setNewWord] = useState({
        newValueWord: '',
        newValueTranslation: '',
        newValueTranscription: '',
        newValueTopic: ''
    });

    const handleClickAddRow = () => {
        setAddRow(addRow = true); 
    }

    useEffect(() => {
        if (checkEmpty(newWord.newValueWord, newWord.newValueTranslation, newWord.newValueTranscription, newWord.newValueTopic)) {
            setEmpty(empty = true);
        } else {
            setEmpty(empty = false);
        }  
    }, [newWord.newValueWord, newWord.newValueTranslation, newWord.newValueTranscription, newWord.newValueTopic])

    const handleChange = (e) => {
        const value = e.target.value;
        setNewWord({
            ...newWord,
            [e.target.name]: value
        });
    }

    const handleClickAddWord = () => {
            addWord(newWord.newValueWord, newWord.newValueTranslation, newWord.newValueTranscription, newWord.newValueTopic);
            setAddRow(addRow = false);   
    }

    const handleClickCloseAdd = () => {
        setAddRow(addRow = false);         
    }

    return (
        <>
        {
            error ?
            (
                <Error />
            )
            :
            (       
        <table className={styles.list}>
          <caption>Ваши слова</caption>
          <thead>
          <tr className={styles.row}>
            <th className={styles.cell + " " + styles.first}>#</th>
            <th className={styles.cell}>word</th>
            <th className={styles.cell}>translation</th>
            <th className={styles.cell}>transcription</th>
            <th className={styles.cell}>topic</th>
            <th className={styles.buttons}>
                <button className={styles.addButton} onClick={handleClickAddRow}>+</button>
            </th>
          </tr>
          </thead>
          <tbody>
          {
            addRow &&
              <tr className={styles.row}>
                <th className={styles.cell + " " + styles.first}></th>
                <td className={styles.cell}>
                    <input className={newWord.newValueWord.trim().length === 0 ? styles.cell__input + ' ' + styles.error : styles.cell__input + ' ' + styles.correct} name="newValueWord" value={newWord.newValueWord} onChange={handleChange} />
                </td>
                <td className={styles.cell}>
                    <input className={newWord.newValueTranslation.trim().length === 0 ? styles.cell__input + ' ' + styles.error : styles.cell__input + ' ' + styles.correct}  name="newValueTranslation" value={newWord.newValueTranslation} onChange={handleChange} />
                </td>
                <td className={styles.cell}>
                    <input className={newWord.newValueTranscription.trim().length === 0 ? styles.cell__input + ' ' + styles.error : styles.cell__input + ' ' + styles.correct} name="newValueTranscription" value={newWord.newValueTranscription} onChange={handleChange} />
                </td>
                <td className={styles.cell}>
                    <input className={newWord.newValueTopic.trim().length === 0 ? styles.cell__input + ' ' + styles.error : styles.cell__input + ' ' + styles.correct} name="newValueTopic" value={newWord.newValueTopic} onChange={handleChange} />
                </td>
                <td className={styles.buttons}>
                    <Button theme={green} buttonImg={save} onClick={handleClickAddWord} disabled={empty}></Button>
                    <Button theme={red} buttonImg={cancel} onClick={handleClickCloseAdd}></Button>
                </td>
              </tr>
          }
      {
        words.map((word) =>
            { 
                return <ReadWordField {...word} key={word.id}/>
            }
        )
       }
       </tbody>
        </table>
        )
    }
        </>
    );
}

export default List;