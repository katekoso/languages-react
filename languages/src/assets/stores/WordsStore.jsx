import { makeAutoObservable, runInAction } from "mobx"

class WordsStore {
    words = []
    error = null
    isLoading = false

    constructor() {
        makeAutoObservable(this);
        //this.performFetch = this.performFetch.bind(this);
        //this.addWord = this.addWord.bind(this);
    }

    loadWords = () => {
        this.isLoading = true;
        return fetch('/api/words')
            .then(response => {
                if (response.ok) { 
                    return response.json();
                } else {
                    throw new Error('Что-то пошло не так ...');
                }
            })     
            .then((response) => {
                runInAction(() => {
                    this.words = response;
                    this.isLoading = false;
                })
            })    
            .catch(error => {
                this.error = error;
                this.isLoading = false;
            });   
    }

    performFetch = (url, options, callback) => {
        this.isLoading = true;
        fetch(url, options)
            .then(response => {
                if (response.ok) { 
                    return response.json();
                } else {
                    throw new Error('Что-то пошло не так ...');
                }
            }) 
            .then(data => {
                callback(data);
                this.isLoading = false;
            })
            .catch(error => {
                this.error = error;
                this.isLoading = false;
            });
    };

    updateWord = (id, valueWord, valueTranslation, valueTranscription, valueTopic) => {
        this.performFetch(`/api/words/${id}/update`, {
            method: "POST",
            body: JSON.stringify({ english: valueWord, russian: valueTranslation, transcription: valueTranscription, tags: valueTopic}),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }, data => {
            runInAction(() => {
            this.words = this.words.map(word => word.id === id ? {...data, id} : word);
            });
        });
    }

    addWord = (valueWord, valueTranslation, valueTranscription, valueTopic) => {
        this.performFetch('/api/words/add', {
            method: "POST",
            body: JSON.stringify({english: valueWord, russian: valueTranslation, transcription: valueTranscription, tags: valueTopic}),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },           
            }, data => {
                console.log(data);
                /*runInAction(() => {
                    this.words = [...this.words, data];
                });
                console.log(data);*/
            });
        };    

    deleteWord = (id) => {
        this.performFetch(`/api/words/${id}/delete`, {
            method: "POST"
        }, () => {
            this.words = this.words.filter(word => word.id !== id);
        }); 
    };
}

export default WordsStore;