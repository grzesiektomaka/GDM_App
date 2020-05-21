import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import IntroQuiz from './components/IntroQuiz'
import Congrats from './components/Congratulations'
import Failed from './components/Failed'
import Question from './components/Question'
 
const Quiz = ({ quiz, maxPoints, getResult, closeQuiz, selectScreen}) => {
    const [points, setPoints] = useState(0)
    const [questionId, setQuestionId] = useState(0)
    const [screen, setScreen] = useState('intro')

    const nextQuestion = () =>{
        if(questionId + 1 < quiz.length){
            setQuestionId(questionId + 1)

        }else{
            getResult(points)
            if(points < maxPoints/2){
                setScreen('lose')
            }else{ 
                setScreen('win')
            }
        }
    }

    const endQuiz = () =>{
        closeQuiz()
        selectScreen('menu')   
    }

    const repeatQuiz = () =>{
        setQuestionId(0)
        setScreen('quiz')
    }

    const returnToMenu = () =>{
        selectScreen('menu')
        closeQuiz()
    }

    console.log(points)
    return(
        <View style={styles.quizWrapper}> 
            { screen == 'intro' && 
                <IntroQuiz 
                    startQuiz={() => setScreen('quiz')}
                    returnToMenu={() => returnToMenu() }
                /> 
            }
            { screen == 'quiz' &&
                <Question 
                    quiz={quiz[questionId]} 
                    nextQuestion={nextQuestion}
                    getPoints={() => setPoints(points + 5)}
                />
            }
            { screen == 'lose' &&
                <Failed 
                    points={points} 
                    maxPoints={maxPoints} 
                    unlocked={'DIET'} 
                    repeatQuiz={() => repeatQuiz()}
                    returnToMenu={() => returnToMenu() }
                /> 
            }
            { screen == 'win' && 
                <Congrats 
                    points={points} 
                    maxPoints={maxPoints} 
                    unlocked={'DIET'} 
                    endQuiz={() => endQuiz()}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
   quizWrapper: {
    alignItems: 'center', 
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 40, 
    padding: 30 ,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
   }
});

export default Quiz;