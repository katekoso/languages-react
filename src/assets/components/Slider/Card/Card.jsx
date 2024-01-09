import { useState, useEffect, useRef } from "react";
import styles from "./card.module.scss";

const Card = ({ english, russian, transcription, countWords }) => {
	let [hidden, setHidden] = useState(false);

	const handleClick = () => {
		setHidden((hidden = true));
	};

	const buttonRef = useRef(null);

	useEffect(() => {
		buttonRef.current.focus();
	}, []);

	return (
		<div className={styles.card + " " + styles.animate}>
			<div className={styles.card__main}>
				<span className={styles.main__word}>{english}</span>
				<span className={styles.main__transcription}>{transcription}</span>
			</div>
			<div className={styles.card__check} onClick={handleClick}>
				{hidden ? (
					<span className={styles.check__text}>{russian}</span>
				) : (
					<button
						className={styles.check__button}
						onClick={countWords}
						ref={buttonRef}
					>
						Проверить
					</button>
				)}
			</div>
		</div>
	);
};

export default Card;
