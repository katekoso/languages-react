import styles from './loader.module.scss';

function Loader() {
    return (
        <div class={styles.cssloadContainer}>
            <div class={styles.cssloadDoubleTorus}></div>
        </div>
    );
}

export default Loader;