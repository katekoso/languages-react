import styles from '../styles/list.module.scss';

function Button(props) {
    const {buttonImg, theme} = props;
    return (
        <button className={theme.color + ' ' + styles.button}>
            <object type="image/svg+xml" data={buttonImg} className={styles.buttonImg}>
                <img src={buttonImg} alt=""/>
            </object>
        </button>
    );
}

export default Button;