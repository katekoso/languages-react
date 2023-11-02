import styles from './list.module.scss';
import ReadWordField from './ReadWordField';
const data = require('../data.json');

function List() {
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
        data.map((word) =>
            { 
                return <ReadWordField id={word.id} english={word.english} russian={word.russian} transcription={word.transcription} tags={word.tags} key={word.id}/>
            }
        )
       }
       </tbody>
        </table>
    );
}

export default List;