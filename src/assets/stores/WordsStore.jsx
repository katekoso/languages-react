import { makeAutoObservable, runInAction } from "mobx";

class WordsStore {
	words = [];
	error = null;
	isLoading = true;

	constructor() {
		makeAutoObservable(this);
	}

	loadWords = () => {
		return fetch("http://itgirlschool.justmakeit.ru/api/words")
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("Что-то пошло не так ...");
				}
			})
			.then((response) => {
				runInAction(() => {
					this.words = response;
					this.isLoading = false;
				});
			})
			.catch((error) => {
				runInAction(() => {
					this.error = error;
					this.isLoading = false;
				});
			});
	};

	performFetch = (url, options, callback) => {
		fetch(url, options)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("Что-то пошло не так ...");
				}
			})
			.then((data) => {
				callback(data);
				runInAction(() => {
					this.isLoading = false;
				});
			})
			.catch((error) => {
				runInAction(() => {
					this.error = error;
					this.isLoading = false;
				});
			});
	};

	updateWord = (
		id,
		valueWord,
		valueTranslation,
		valueTranscription,
		valueTopic
	) => {
		this.performFetch(
			`/api/words/${id}/update`,
			{
				method: "POST",
				body: JSON.stringify({
					english: valueWord,
					russian: valueTranslation,
					transcription: valueTranscription,
					tags: valueTopic,
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			},
			(data) => {
				runInAction(() => {
					this.words = this.words.map((word) =>
						word.id === id ? { ...data, id } : word
					);
				});
			}
		);
	};

	addWord = (
		id = null,
		valueWord,
		valueTranslation,
		valueTranscription,
		valueTopic
	) => {
		this.performFetch(
			"/api/words/add",
			{
				method: "POST",
				body: JSON.stringify({
					english: valueWord,
					russian: valueTranslation,
					transcription: valueTranscription,
					tags: valueTopic,
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			},
			(data) => {
				runInAction(() => {
					this.words = [...this.words, data];
				});
			}
		);
	};

	deleteWord = (id) => {
		this.performFetch(
			`/api/words/${id}/delete`,
			{
				method: "POST",
			},
			() => {
				runInAction(() => {
					this.words = this.words.filter((word) => word.id !== id);
				});
			}
		);
	};
}

export default WordsStore;
