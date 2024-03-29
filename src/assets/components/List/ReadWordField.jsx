import { useState } from "react";
import styles from "./list.module.scss";
import Button from "./Button";
import purple from "../../styles/themes/purple-theme.module.scss";
import red from "../../styles/themes/red-theme.module.scss";
import redact from "../../images/redact.svg";
import del from "../../images/del.svg";
import RedactWordForm from "./RedactWordForm/RedactWordForm";
import { observer, inject } from "mobx-react";

const ReadWordField = inject(["WordsStore"])(
	observer(({ id, english, russian, transcription, tags, WordsStore }) => {
		let [redacted, setRedacted] = useState(false);

		const handleClickRedact = () => {
			setRedacted((redacted = true));
		};

		const handleClickDelete = () => {
			WordsStore.deleteWord(id);
		};

		return (
			<>
				{redacted ? (
					<RedactWordForm
						id={id}
						english={english}
						russian={russian}
						transcription={transcription}
						tags={tags}
						key={id}
					/>
				) : (
					<>
						<tr className={styles.row}>
							<th className={styles.cell + " " + styles.first}>{id}</th>
							<td className={styles.cell}>
								<span className={styles.cell__mobile}>слово</span>
								{english}
							</td>
							<td className={styles.cell}>
								<span className={styles.cell__mobile}>перевод</span>
								{russian}
							</td>
							<td className={styles.cell}>
								<span className={styles.cell__mobile}>транскрипция</span>
								{transcription}
							</td>
							<td className={styles.cell}>
								<span className={styles.cell__mobile}>тема</span>
								{tags}
							</td>
							<td>
								<div className={styles.buttons}>
									<Button
										theme={purple}
										buttonImg={redact}
										onClick={handleClickRedact}
									></Button>
									<Button
										theme={red}
										buttonImg={del}
										onClick={handleClickDelete}
									></Button>
								</div>
							</td>
						</tr>
					</>
				)}
			</>
		);
	})
);

export default ReadWordField;
