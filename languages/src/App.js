import './assets/styles/App.css';
import List from './assets/components/List/List';
import Card from './assets/components/Card/Card';
const data = require('./assets/components/data.json');

function App() {
  return (
    <>
    {
      data.map((word) =>
          <Card english={word.english} russian={word.russian} transcription={word.transcription} key={word.id}/>
      )
    }
    <div className="listContainer">
    <List></List>
    </div>
    </>
  );
}

export default App;
