import styles from './list.module.scss';
import ReadWordField from './ReadWordField';
//const data = require('../data.json');
//import { WordsStore } from '../../stores/WordsStore';
import { useState, useEffect } from 'react';
import { observer, inject } from "mobx-react";
import RedactWordFormField from './RedactWordForm/RedactWordFormField';

const List = inject(['WordsStore'])(observer(({ words, WordsStore }) => {
    let [addRow, setAddRow] = useState(false);

    const handleClickAddRow = () => {
        setAddRow(addRow = true); 
    }

    const handleClickCloseAdd = () => {
        setAddRow(addRow = false);         
    }

    return (
        <>
        {
            WordsStore.error ?
            (
                <div>Error</div>
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
                    <RedactWordFormField english='' russian='' transcription='' tags='' func1={WordsStore.addWord} func2={setAddRow} stateForClick={addRow} handleClickRed={handleClickCloseAdd}/>
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
}));

export default List;

/*export default inject(({ WordsStore }) => {
    const {words, loadWords, isLoading} = WordsStore;

    useEffect(() => {
        if(!isLoading) {
            loadWords();
        }
    });
    return(
        words, loadWords
    );
})(observer(List));*/