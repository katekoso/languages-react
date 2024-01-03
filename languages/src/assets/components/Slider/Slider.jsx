import {useState} from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import styles from './slider.module.scss';
import Card from './Card/Card';
import SliderButton from './SliderButton';
import Loader from '../Loader/Loader';

const Slider = ({ words, firstWordIndex, isLoading })  => {
    const [selectedIndex, setSelectedIndex] = useState(firstWordIndex);
    const [learnedWordsCount, setLearnedWordsCount] = useState(0);

    const countWords = () => {
        setLearnedWordsCount(learnedWordsCount + 1);
    }

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
        <>
        {
            isLoading ?
            (
                <div className={styles.container}> 
                        <Loader />
                    </div>
            )
            :
            (
                <div className={styles.container}>
                    <div className={styles.slider}>
                        <div className={styles.slider__learn}>За урок вы изучили слов: {learnedWordsCount}</div>
                        <div className={styles.slider__main}>
                            <SliderButton direction={"prev"} moveSlide={showPrevious}/>
                            <SwitchTransition mode="out-in">
                                <CSSTransition 
                                    key={selectedIndex}
                                    timeout={500}
                                    classNames={{
                                        enterActive: styles.myClassEnterActive,
                                        exitActive: styles.myClassExitActive
                                    }}
                                >
                                    <Card english={words[selectedIndex].english} russian={words[selectedIndex].russian} transcription={words[selectedIndex].transcription} countWords={countWords} key={words[selectedIndex].id}/>
                                </CSSTransition>
                            </SwitchTransition>
                            <SliderButton direction={"next"} moveSlide={showNext}/>
                        </div>
                        <div className={styles.slider__count}>{selectedIndex + 1}/{words.length}</div>
                    </div>
                </div>
            )
        }
        </>
    );
};

Slider.defaultProps = {
	words: [{english: 'Ошибка'}],
    firstWordIndex: 0,
}

export default Slider;