import {useState} from 'react';
import styles from './slider.module.scss';
import Card from '../Card/Card';
import SliderButton from './SliderButton';

function Slider(props) {
    /*static defaultProps = {
		words: 'Hello!',
        firstWordIndex: 0,
	};*/
    const { words, firstWordIndex } = props;
    const [selectedIndex, setSelectedIndex] = useState(firstWordIndex || 0);

    const showPrevious = () => {
        if(selectedIndex !== 0){
            setSelectedIndex(selectedIndex - 1)
        }
        else if (selectedIndex === 0){
            setSelectedIndex(words.length - 1)
        }
      }
      
      const showNext = () => {
        if(selectedIndex !== words.length - 1){
            setSelectedIndex(selectedIndex + 1)
        } 
        else if (selectedIndex === words.length - 1){
            setSelectedIndex(0)
        }
      }

    return (
        <div className={styles.slider}>
            <div className={styles.slider__main}>
        <SliderButton direction={"prev"} moveSlide={showPrevious}/>
        <Card english={words[selectedIndex].english} russian={words[selectedIndex].russian} transcription={words[selectedIndex].transcription} key={words[selectedIndex].id} />
        <SliderButton direction={"next"} moveSlide={showNext}/>
        </div>
        <div className={styles.slider__count}>{selectedIndex + 1}/{words.length}</div>
      </div>
    );
}

export default Slider;