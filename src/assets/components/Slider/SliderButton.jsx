import nextArrow from "../../images/nextArr.svg";
import prevArrow from "../../images/prevArr.svg";
import styles from "./slider.module.scss";

const SliderButton = ({ direction, moveSlide }) => {
	return (
		<button onClick={moveSlide} className={styles.button}>
			<img src={direction === "next" ? nextArrow : prevArrow} alt="Arrow" />
		</button>
	);
};

export default SliderButton;
