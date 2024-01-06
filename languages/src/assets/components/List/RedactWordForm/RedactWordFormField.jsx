import { useState, useEffect } from "react";
import styles from "../list.module.scss";
import Button from "../Button";
import green from "../../../styles/themes/green-theme.module.scss";
import red from "../../../styles/themes/red-theme.module.scss";
import save from "../../../images/save.svg";
import cancel from "../../../images/cancel.svg";

const RedactWordFormField = ({
	id,
	english,
	russian,
	transcription,
	tags,
	func1,
	func2,
	stateForClick,
	handleClickRed,
}) => {
	let [empty, setEmpty] = useState(false);
	const [state, setState] = useState({
		valueWord: english,
		valueTranslation: russian,
		valueTranscription: transcription,
		valueTopic: tags,
	});
	const [errors, setErrors] = useState({
		onlyEnglishLetters: "",
		onlyRussianLetters: "",
		onlyThisPattern: "",
	});

	const handleChange = (e) => {
		const value = e.target.value;
		setState({
			...state,
			[e.target.name]: value,
		});
	};

	useEffect(() => {
		if (
			state.valueWord.trim().length === 0 ||
			state.valueTranslation.trim().length === 0 ||
			state.valueTranscription.trim().length === 0 ||
			state.valueTopic.trim().length === 0
		) {
			setEmpty((empty = true));
		} else {
			setEmpty((empty = false));
		}
	}, [
		state.valueWord,
		state.valueTranslation,
		state.valueTranscription,
		state.valueTopic,
	]);

	const validate = () => {
		let onlyEnglishLetters = "";
		let onlyRussianLetters = "";
		let onlyThisPattern = "";

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
			onlyEnglishLetters: "",
			onlyRussianLetters: "",
			onlyThisPattern: "",
		});
		return true;
	};

	const handleClickGreen = (func1, func2, stateForClick) => {
		if (validate()) {
			func1(
				id,
				state.valueWord,
				state.valueTranslation,
				state.valueTranscription,
				state.valueTopic
			);
			func2((stateForClick = false));
		}
	};

	return (
		<tr className={styles.row}>
			<th className={styles.cell + " " + styles.first}>{id}</th>
			<td className={styles.cell}>
				<input
					className={
						state.valueWord.trim().length === 0
							? styles.cell__input + " " + styles.error
							: styles.cell__input + " " + styles.correct
					}
					name="valueWord"
					value={state.valueWord}
					onChange={handleChange}
				/>
				<span className={styles.textError}>{errors.onlyEnglishLetters}</span>
			</td>
			<td className={styles.cell}>
				<input
					className={
						state.valueTranslation.trim().length === 0
							? styles.cell__input + " " + styles.error
							: styles.cell__input + " " + styles.correct
					}
					name="valueTranslation"
					value={state.valueTranslation}
					onChange={handleChange}
				/>
				<span className={styles.textError}>{errors.onlyRussianLetters}</span>
			</td>
			<td className={styles.cell}>
				<input
					className={
						state.valueTranscription.trim().length === 0
							? styles.cell__input + " " + styles.error
							: styles.cell__input + " " + styles.correct
					}
					name="valueTranscription"
					value={state.valueTranscription}
					onChange={handleChange}
				/>
				<span className={styles.textError}>{errors.onlyThisPattern}</span>
			</td>
			<td className={styles.cell}>
				<input
					className={
						state.valueTopic.trim().length === 0
							? styles.cell__input + " " + styles.error
							: styles.cell__input + " " + styles.correct
					}
					name="valueTopic"
					value={state.valueTopic}
					onChange={handleChange}
				/>
			</td>
			<td>
				<div className={styles.buttons}>
					<Button
						theme={green}
						buttonImg={save}
						disabled={empty}
						onClick={() => handleClickGreen(func1, func2, stateForClick)}
					></Button>
					<Button
						theme={red}
						buttonImg={cancel}
						onClick={handleClickRed}
					></Button>
				</div>
			</td>
		</tr>
	);
};

export default RedactWordFormField;
