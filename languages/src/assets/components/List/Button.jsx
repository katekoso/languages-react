import styles from "./list.module.scss";

const Button = ({ buttonImg, theme, onClick, disabled }) => {
	return (
		<button
			className={theme.color + " " + styles.button}
			onClick={onClick}
			disabled={disabled}
		>
			<object
				type="image/svg+xml"
				data={buttonImg}
				className={styles.buttonImg}
				onClick={onClick}
			></object>
		</button>
	);
};

export default Button;
