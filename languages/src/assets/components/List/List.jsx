import { useContext } from 'react';
import styles from './list.module.scss';
import ReadWordField from './ReadWordField';
//const data = require('../data.json');
import { DataContext } from '../DataContextProvider/DataContextProvider';

function List() {
    const { words } = useContext(DataContext);
    return (
        <table className={styles.list}>
          <caption>Ваши слова</caption>
          <thead>
          <tr className={styles.row}>
            <th className={styles.cell + " " + styles.first}>#</th>
            <th className={styles.cell}>word</th>
            <th className={styles.cell}>translation</th>
            <th className={styles.cell}>transcription</th>
            <th className={styles.cell}>topic</th>
            <th className={styles.buttons}></th>
          </tr>
          </thead>
          <tbody>
      {
        words.map((word) =>
            { 
                return <ReadWordField {...word} key={word.id}/>
            }
        )
       }
       </tbody>
        </table>
    );
}

export default List;