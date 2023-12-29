import styles from './loader.module.scss';

function Loader() {
    return (
        <div className={styles.cssloadContainer}>
            <div className={styles.cssloadDoubleTorus}></div>
        </div>
    );
}

export default Loader;