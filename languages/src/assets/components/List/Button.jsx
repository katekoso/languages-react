import styles from "./list.module.scss";

const Button = ({ buttonImg, theme, onClick, disabled }) => {
	return (
		<button
			className={theme.color + " " + styles.button}
			onClick={onClick}
			disabled={disabled}
		>
			<img
				src={buttonImg}
				className={styles.buttonImg}
				onClick={onClick}
				alt="Button"
			></img>
		</button>
	);
};

export default Button;
