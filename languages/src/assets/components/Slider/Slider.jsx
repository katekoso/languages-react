import {useState, useRef} from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import styles from './slider.module.scss';
import Card from './Card/Card';
import SliderButton from './SliderButton';

function Slider(props) {
    const { words, firstWordIndex } = props;
    const [toggle, setToggle] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(firstWordIndex);
    //const buttonRef = useRef(null);


    const handleClick = () => {
        setToggle(!toggle);
    }

    const changeIndexPrevious = () => {
        if(selectedIndex !== 0){
            setSelectedIndex(selectedIndex - 1)
        }
        else if (selectedIndex === 0){
            setSelectedIndex(words.length - 1)
        }
    }

    const changeIndexNext = () => {
        if(selectedIndex !== words.length - 1){
            setSelectedIndex(selectedIndex + 1)
        } 
        else if (selectedIndex === words.length - 1){
            setSelectedIndex(0)
        }
    }

    const showPrevious = () => {
        handleClick();
        changeIndexPrevious();
      }
      
      const showNext = () => {
        handleClick();
        changeIndexNext();
      }

    return (
        <div className={styles.slider}>
            <div className={styles.slider__main}>
            <SwitchTransition mode="out-in">
            <CSSTransition 
            key={toggle}
            timeout={500}
            classNames={styles.fade}
            addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
            }}
            >
                <>
        <SliderButton direction={"prev"} moveSlide={showPrevious}/>
           <Card english={words[selectedIndex].english} russian={words[selectedIndex].russian} transcription={words[selectedIndex].transcription} key={words[selectedIndex].id} onClick={handleClick}/>
        <SliderButton direction={"next"} moveSlide={showNext}/>
        </>
        </CSSTransition>
      </SwitchTransition>
        </div>
        <div className={styles.slider__count}>{selectedIndex + 1}/{words.length}</div>
      </div>
    );
}

Slider.defaultProps = {
	words: [{english: 'Ошибка'}],
    firstWordIndex: 0,
}

export default Slider;