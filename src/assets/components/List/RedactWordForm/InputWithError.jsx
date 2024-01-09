import styles from "../list.module.scss";

const InputWithError = ({ name, value, onChange, error, errorMessage }) => {
	return (
		<>
			<input
				className={
					value.trim().length === 0
						? styles.cell__input + " " + styles.error
						: styles.cell__input + " " + styles.correct
				}
				name={name}
				value={value}
				onChange={onChange}
			/>
			{error && <span className={styles.errorText}>{errorMessage}</span>}
		</>
	);
};

export default InputWithError;
