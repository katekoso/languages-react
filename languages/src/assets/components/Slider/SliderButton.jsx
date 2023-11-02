import nextArrow from '../../images/nextArr.svg';
import prevArrow from '../../images/prevArr.svg';
import styles from './slider.module.scss';

function SliderButton(props) {
    const { direction, moveSlide } = props;
    return (
      <button
        onClick={moveSlide}
        className={styles.button}
      >
        <img src={direction === "next" ? nextArrow : prevArrow} alt="Arrow"/>
      </button>
    );
  }

export default SliderButton;  