import styles from "./nomatch.module.scss";
import { Routes, Route, Link } from "react-router-dom";
import List from "../List/List";

const NoMatch = () => {
	return (
		<div className={styles.error}>
			<h1 className={styles.error__code}>404</h1>
			<h1 className={styles.error__message}>
				К сожалению, этой страницы не существует
			</h1>
			<p className={styles.error__explanation}>
				Неправильно набран адрес, или страница удалена
			</p>
			<button className={styles.error__btn}>
				<Link to="/languages-react" className={styles.btn__link}>
					На главную
				</Link>
			</button>
			<Routes>
				<Route exact path="/languages-react" element={<List />} />
			</Routes>
		</div>
	);
};

export default NoMatch;
