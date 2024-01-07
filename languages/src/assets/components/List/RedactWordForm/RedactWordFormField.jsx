import { useState, useCallback } from "react";
import styles from "../list.module.scss";
import Button from "../Button";
import green from "../../../styles/themes/green-theme.module.scss";
import red from "../../../styles/themes/red-theme.module.scss";
import save from "../../../images/save.svg";
import cancel from "../../../images/cancel.svg";
import InputWithError from "./InputWithError";

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
	//let [empty, setEmpty] = useState(false);
	const [state, setState] = useState({
		valueWord: english,
		valueTranslation: russian,
		valueTranscription: transcription,
		valueTopic: tags,
	});
	const [errors, setErrors] = useState({
		onlyEnglishLetters: false,
		onlyRussianLetters: false,
		onlyThisPattern: false,
	});

	const isFormEmpty = Object.values(state).some(
		(value) => value.trim().length === 0
	);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const validate = useCallback(() => {
		const regexEnglishLetters = /^[A-Za-z]+$/;
		const regexRussianLetters = /^[А-Яа-я]+$/;
		const regexTranscription = /\[.*\]/i;

		const newErrors = {
			onlyEnglishLetters: !regexEnglishLetters.test(state.valueWord),
			onlyRussianLetters: !regexRussianLetters.test(state.valueTranslation),
			onlyThisPattern: !regexTranscription.test(state.valueTranscription),
		};

		setErrors(newErrors);
		return !Object.values(newErrors).some(Boolean);
	}, [state.valueWord, state.valueTranslation, state.valueTranscription]);

	const handleClickGreen = useCallback(() => {
		if (validate()) {
			func1(
				id,
				state.valueWord,
				state.valueTranslation,
				state.valueTranscription,
				state.valueTopic
			);
			func2(!stateForClick);
		}
	}, [id, state, validate, func1, func2, stateForClick]);

	return (
		<tr className={styles.row}>
			<th className={styles.cell + " " + styles.first}>{id}</th>
			<td className={styles.cell}>
				<InputWithError
					name="valueWord"
					value={state.valueWord}
					onChange={handleChange}
					error={errors.onlyEnglishLetters}
					errorMessage="Используйте только английские буквы"
				/>
			</td>
			<td className={styles.cell}>
				<InputWithError
					name="valueTranslation"
					value={state.valueTranslation}
					onChange={handleChange}
					error={errors.onlyRussianLetters}
					errorMessage="Используйте только русские буквы"
				/>
			</td>
			<td className={styles.cell}>
				<InputWithError
					name="valueTranscription"
					value={state.valueTranscription}
					onChange={handleChange}
					error={errors.onlyThisPattern}
					errorMessage="Используйте формат [...]"
				/>
			</td>
			<td className={styles.cell}>
				<InputWithError
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
						disabled={isFormEmpty}
						onClick={() => handleClickGreen(func1, func2, stateForClick)}
					/>
					<Button theme={red} buttonImg={cancel} onClick={handleClickRed} />
				</div>
			</td>
		</tr>
	);
};

export default RedactWordFormField;
