import styles from '../styles/list.module.scss';

function List(props) {
    return (
        <>
        <h3>Your words</h3>
        <form className="styles.form">
            <input type="text" placeholder="word"
            className="styles.form__text"
            />
            <input type="text" placeholder="translation"
            className="styles.form__text"
            />
             <input type="text" placeholder="transcription"
            className="styles.form__text"
            />
             <input type="text" placeholder="topic"
            className="styles.form__text"
            />
        </form>
        </>
    );
}

export default List;