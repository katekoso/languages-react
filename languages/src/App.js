import './assets/styles/App.css';
import List from './assets/components/List/List';
import Slider from './assets/components/Slider/Slider';
const data = require('./assets/components/data.json');

function App() {
  return (
    <>
    <Slider words={data}/>
    <div className="listContainer">
    <List></List>
    </div>
    </>
  );
}

export default App;