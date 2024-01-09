import styles from "./nomatch.module.scss";

const Error = () => {
	return (
		<div className={styles.error}>
			<h1 className={styles.error__message}>Произошла ошибка на сервере</h1>
			<p className={styles.error__explanation}>Мы уже работаем над этим!</p>
		</div>
	);
};

export default Error;
