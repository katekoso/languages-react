import styles from './list.module.scss';

function Button(props) {
    const {buttonImg, theme, onClick, disabled} = props;

    return (
        <button className={theme.color + ' ' + styles.button} onClick={onClick} disabled={disabled}>
            <object type="image/svg+xml" data={buttonImg} className={styles.buttonImg} onClick={onClick}>
            </object>
        </button>
    );
}

export default Button;