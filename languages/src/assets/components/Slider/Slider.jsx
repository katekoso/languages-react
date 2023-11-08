import {useState} from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import styles from './slider.module.scss';
import Card from './Card/Card';
import SliderButton from './SliderButton';

function Slider(props) {
    const { words, firstWordIndex } = props;
    const [selectedIndex, setSelectedIndex] = useState(firstWordIndex);
    //const buttonRef = useRef(null);

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
        changeIndexPrevious();
      }
      
      const showNext = () => {
        changeIndexNext();
      }

    return (
        <div className={styles.slider}>
            <div className={styles.slider__main}>
        <SliderButton direction={"prev"} moveSlide={showPrevious}/>
        <SwitchTransition mode="out-in">
                <CSSTransition 
                key={selectedIndex}
            timeout={500}
            classNames={{
                enterActive: styles.myClassEnterActive,
                enterDone: styles.myClassEnterDone,
                exitActive: styles.myClassExitActive,
                exitDone: styles.myClassExitDone
            }}
            >
           <Card english={words[selectedIndex].english} russian={words[selectedIndex].russian} transcription={words[selectedIndex].transcription} key={words[selectedIndex].id}/>
           </CSSTransition>
      </SwitchTransition>
        <SliderButton direction={"next"} moveSlide={showNext}/>
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