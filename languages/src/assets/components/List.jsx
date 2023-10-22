import styles from '../styles/list.module.scss';
import ReadWordField from './ReadWordField';
import RedactWordForm from './RedactWordForm';

const data = [
    {
      number: 1,
      word: "кот",
      translation: "cat",
      transcription: "[kæt]",
      topic: "animals"
    },
    {
      number: 2,
      word: "птица",
      translation: "bird",
      transcription: "[bɜːd]",
      topic: "animals",
      saved: true
    }
  ]

function List() {
    //const {saved} = props;
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
            { return word.saved
                ? <ReadWordField number={word.number} word={word.word} translation={word.translation} transcription={word.transcription} topic={word.topic} key={word.number}/>
                : <RedactWordForm number={word.number} word={word.word} translation={word.translation} transcription={word.transcription} topic={word.topic} key={word.number}/>
            }
        )
       }
       </tbody>
        </table>
    );
}

export default List;