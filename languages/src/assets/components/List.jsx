import styles from '../styles/list.module.scss';
import ReadWordField from './ReadWordField';
import RedactWordForm from './RedactWordForm';

function List(props) {
    const {saved, number, word, translation, transcription, topic} = props;
    return (
        <>
        {saved
          ? <ReadWordField number={number} word={word} translation={translation} transcription={transcription} topic={topic}/>
          : <RedactWordForm number={number} word={word} translation={translation} transcription={transcription} topic={topic}/>
        }
        </>
    );
}

export default List;