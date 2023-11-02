import './assets/styles/App.css';
import List from './assets/components/List/List';
import Card from './assets/components/Card/Card';
const data = require('./assets/components/data.json');

function App() {
  return (
    <>
    {
      data.map((word) =>
          <Card word={word.word} translation={word.translation} transcription={word.transcription} key={word.word}/>
      )
    }
    <div className="listContainer">
    <List></List>
    </div>
    </>
  );
}

export default App;
