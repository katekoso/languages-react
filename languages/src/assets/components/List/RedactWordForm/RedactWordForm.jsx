import {useState, useEffect} from 'react';
import ReadWordField from '../ReadWordField';
import { observer, inject } from "mobx-react";
import RedactWordFormField from './RedactWordFormField';

const RedactWordForm = inject(['WordsStore'])(observer(({ id, english, russian, transcription, tags, WordsStore }) => {
    
    let [redacted, setRedacted] = useState(true);
    /*let [empty, setEmpty] = useState(false);
    const [state, setState] = useState({
        valueWord: english,
        valueTranslation: russian,
        valueTranscription: transcription,
        valueTopic: tags
    });
    const [errors, setErrors] = useState({
        onlyEnglishLetters: '',
        onlyRussianLetters: '',
        onlyThisPattern: ''
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    }*/

    const handleClickCloseRedact = () => {
        setRedacted(redacted = false);
    }

    /*useEffect(() => {
        if (state.valueWord.trim().length === 0 || state.valueTranslation.trim().length === 0 || state.valueTranscription.trim().length === 0 || state.valueTopic.trim().length === 0) {
            setEmpty(empty = true);
        } else {
            setEmpty(empty = false);
        }    
    }, [state.valueWord, state.valueTranslation, state.valueTranscription, state.valueTopic]);

    const validate = () => {
        let onlyEnglishLetters = '';
        let onlyRussianLetters = '';
        let onlyThisPattern = '';

        const regexEnglishLetters = /^[A-Za-z]+$/;
        const regexRussianLetters = /^[А-Яа-я]+$/;
        const regexTranscription = /\[.*\]/i;

        if (regexEnglishLetters.test(state.valueWord) === false) {
            onlyEnglishLetters = "Используйте только английские буквы";
        }

        if (regexRussianLetters.test(state.valueTranslation) === false) {
            onlyRussianLetters = "Используйте только русские буквы";
        }

        if (regexTranscription.test(state.valueTranscription) === false) {
            onlyThisPattern = "Используйте формат [...]";
        }

        if (onlyEnglishLetters || onlyRussianLetters || onlyThisPattern) {
            setErrors({ onlyEnglishLetters, onlyRussianLetters, onlyThisPattern });
            return false;
        }
        
        setErrors({ 
            onlyEnglishLetters: '',
            onlyRussianLetters: '',
            onlyThisPattern: ''
        });
        return true;
    }

    const handleClickSaveRedact = () => {
        if (validate()) {
            //console.log(`Слово: ${state.valueWord}, перевод: ${state.valueTranslation}, транскрипция: ${state.valueTranscription}, тэг: ${state.valueTopic}`);
            WordsStore.updateWord(id, state.valueWord, state.valueTranslation, state.valueTranscription, state.valueTopic);
            setRedacted(redacted = false);
        }
    }*/

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