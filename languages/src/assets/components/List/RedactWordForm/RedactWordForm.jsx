import { useState } from 'react';
import ReadWordField from '../ReadWordField';
import { observer, inject } from "mobx-react";
import RedactWordFormField from './RedactWordFormField';

const RedactWordForm = inject(['WordsStore'])(observer(({ id, english, russian, transcription, tags, WordsStore }) => {
    
    let [redacted, setRedacted] = useState(true);

    const handleClickCloseRedact = () => {
        setRedacted(redacted = false);
    }

    return (
        <>
        {
            redacted 
            ? <RedactWordFormField id={id} english={english} russian={russian} transcription={transcription} tags={tags} key={id} func1={WordsStore.updateWord} func2={setRedacted} stateForClick={redacted} handleClickRed={handleClickCloseRedact}/>
            : <ReadWordField id={id} english={english} russian={russian} transcription={transcription} tags={tags} key={id}/>
        }
     </>
    );
}));

export default RedactWordForm;