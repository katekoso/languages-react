import styles from './assets/styles/App.css';
import List from './assets/components/List';

const data = [
  {
    number: 1,
    word: "кот",
    translation: "cat",
    transcription: "[kæt]",
    topic: "animals",
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

function App() {
  return (
    <div className={styles.list}>
      <h3>Ваши слова</h3>
      {
        data.map((word) =>
           <List number={word.number} word={word.word} translation={word.translation} transcription={word.transcription} topic={word.topic} saved={word.saved}></List>
        )
      }
    </div>
  );
}

export default App;
