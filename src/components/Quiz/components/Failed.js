import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import QuizBtn from './QuizBtn'
import ReturnBtn from './ReturnBtn'

import failImg from '../../../data/images/fail.png'


const Failed = ({points, maxPoints, unlocked, repeatQuiz, returnToMenu}) => {
    return(
        <View style={styles.quizFailedWrapper}>
            <Image source={failImg} style={styles.failImg}/>
            <Text style={styles.failText}>You Failed ! </Text>
            <Text style={styles.failText}>Try again to unlock new chapter {unlocked}</Text>
            <Text style={styles.pointsText}>{points + '/' + maxPoints}</Text>
            <QuizBtn btnText={'START AGAIN'} btnAction={repeatQuiz}/>
            <ReturnBtn returnAction={returnToMenu} />
        </View>
    )
}

const styles = StyleSheet.create({
  quizFailedWrapper: {
      alignItems: 'center'
  },
  failImg: {
    marginBottom: 30
  },
  failText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5
  },
  pointsText:{
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20
  }
});

export default Failed;