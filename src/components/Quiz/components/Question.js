import React, { useState } from 'react'
import { View, StyleSheet, Image, Text} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import QuizBtn from './QuizBtn'
import { isEqual } from 'lodash';

 
const Question = ({quiz, nextQuestion, getPoints}) => {
    const [a1, setA1] = useState(false)
    const [a2, setA2] = useState(false)
    const [a3, setA3] = useState(false)
    const [a4, setA4] = useState(false)
    const [answer, setAnswer] = useState([])    

    const checkReply = () => {
        if(isEqual(answer.sort(), quiz.answer)){
            getPoints()
        }
        nextQuestion()
        setA1(false)
        setA2(false)
        setA3(false)
        setA4(false)
        setAnswer([])
    };

    console.log(answer)
    console.log(quiz.answer)

    return(
        <View style={styles.quizFailedWrapper}>
            <Text style={styles.questHeader}>{quiz.questId}: {quiz.text} </Text>
            
            <View style={styles.answerWrapper}>
                <CheckBox
                    disabled={false}
                    value={a1}
                    onCheckColor={'#7D61EC'}
                    boxType={'circle'}
                    onChange={() => a1 ? 
                        setAnswer(answer.filter(a => a !== 'a1')) : 
                        setAnswer(oldArray => [...oldArray, 'a1']) }
                    onValueChange={() => a1 ? setA1(false) : setA1(true)}
                />
                <Text style={styles.answerTxt}>{quiz.answers.a1}</Text>
            </View>
            <View style={styles.answerWrapper}>
                <CheckBox
                    disabled={false}
                    value={a2}
                    onCheckColor={'#7D61EC'}
                    boxType={'circle'}
                    onChange={() => a2 ? 
                        setAnswer(answer.filter(a => a !== 'a2')) : 
                        setAnswer(oldArray => [...oldArray, 'a2']) }
                    onValueChange={() => a2 ? setA2(false) : setA2(true)}
                />
                <Text style={styles.answerTxt}>{quiz.answers.a2}</Text>
            </View>
            <View style={styles.answerWrapper}>
                <CheckBox
                    disabled={false}
                    value={a3}
                    onCheckColor={'#7D61EC'}
                    boxType={'circle'}
                    onChange={() => a3 ? 
                        setAnswer(answer.filter(a => a !== 'a3')) : 
                        setAnswer(oldArray => [...oldArray, 'a3']) }
                    onValueChange={() => a3 ? setA3(false) : setA3(true)}
                />
                <Text style={styles.answerTxt}>{quiz.answers.a3}</Text>
            </View>
            <View style={styles.answerWrapper}>
                <CheckBox
                    disabled={false}
                    value={a4}
                    onCheckColor={'#7D61EC'}
                    boxType={'circle'}
                    onChange={() => a4 ? 
                        setAnswer(answer.filter(a => a !== 'a4')) : 
                        setAnswer(oldArray => [...oldArray, 'a4']) }
                    onValueChange={() => a4 ? setA4(false) : setA4(true)}
                />
                <Text style={styles.answerTxt}>{quiz.answers.a4}</Text>
            </View>
            <QuizBtn btnText={'NEXT'} btnAction={checkReply}/>
        </View>
    )
}

const styles = StyleSheet.create({
  quizFailedWrapper: {
      alignItems: 'center'
  },
  questHeader: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
    paddingBottom: 15
  },
  answerWrapper: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
      marginLeft: 20,
      marginTop: 8
  },
  answerTxt: {
      fontSize: 18,
      marginTop: 3, 
      marginLeft: 3,
      paddingRight: 20
  }
});

export default Question;