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
                    throw new Error('Что-то пошло не так ...');
                }
            })     
            .then((response) => {
                setWords(response);
                setLoading(false);
            })    
            .catch(error => {
                    setError(error);
                    setLoading(false);
            });    
    }, []);

    const performFetch = (url, options, callback) => {
        setLoading(true);
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                callback(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    };

    const updateWord = (id, valueWord, valueTranslation, valueTranscription, valueTopic) => {
        performFetch(`/api/words/${id}/update`, {
            method: "POST",
            body: JSON.stringify({ english: valueWord, russian: valueTranslation, transcription: valueTranscription, tags: valueTopic}),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }, data => {
            setWords(words => words.map(word => word.id === id ? {...data, id} : word));
        });
    };
       
    const addWord = (newValueWord, newValueTranslation, newValueTranscription, newValueTopic) => {
        performFetch('/api/words/add', {
            method: "POST",
            body: JSON.stringify({
                english: newValueWord, russian: newValueTranslation, transcription: newValueTranscription, tags: newValueTopic               
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },           
        }, data => {
            setWords(words => [...words, data]);
        });
    };

    const deleteWord = (id) => {
        performFetch(`/api/words/${id}/delete`, {
            method: "POST"
        }, () => {
            setWords(words => words.filter(word => word.id !== id));
        }); 
    };

    return (
        <DataContext.Provider value={{ words, loading, updateWord, addWord, deleteWord, error }}>
            {props.children}
        </DataContext.Provider>
    );
}

export { DataContext, DataContextProvider };