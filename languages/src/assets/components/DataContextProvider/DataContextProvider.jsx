import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

function DataContextProvider(props) {
    let [words, setWords] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/words')
            .then(response => {
                if (response.ok) { 
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })     
            .then((response) => {
                setWords(words = response);
                setLoading(false);
            })    
            .catch(error => setError(error));
    }, []);

    const updateWord = (id, valueWord, valueTranslation, valueTranscription, valueTopic) => {
        fetch(`/api/words/${id}/update`, {
            method: "POST",
            body: JSON.stringify({ english: valueWord, russian: valueTranslation, transcription: valueTranscription, tags: valueTopic}),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
                .then(response => response.json())
                .then(data => {
                    const updatedWords = words.map(word => word.id === id ? { id: id, english: data.english, russian: data.russian, transcription: data.transcription, tags: data.tags} : word)
                    setWords(updatedWords);
                })
        }
       
    const addWord = (newValueWord,
    newValueTranslation,
    newValueTranscription,
    newValueTopic) => {
        fetch('/api/words/add', {
            method: "POST",
            body: JSON.stringify({
                english: newValueWord, russian: newValueTranslation, transcription: newValueTranscription, tags: newValueTopic               
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
              },           
        })
            .then(response => response.json())
            .then(data => {
                setWords([...words, data])
            })
    } 

    return (
        <DataContext.Provider value={{ words, loading, updateWord, addWord }}>
            {props.children}
        </DataContext.Provider>
    );
}

export { DataContext, DataContextProvider };