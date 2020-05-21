import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'

import congrats from '../../../data/images/valentine.png'
import nextArrow from '../../../data/images/nextArrow.png'


 
const Congratulations = ({points, maxPoints, unlocked, endQuiz}) => {
    return(
        <View style={styles.quizCongratulationsWrapper}>
            <Image source={congrats} style={styles.congratImg}/>
            <Text style={styles.congratsText}>Congratulation ! </Text>
            <Text style={styles.congratsText}>You unlocked new chapter {unlocked}</Text>
            <Text style={styles.pointsText}>{points + '/' + maxPoints}</Text>
            <TouchableOpacity style={styles.nextBtn} onPress={endQuiz}>
                <Image source={nextArrow} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  quizCongratulationsWrapper: {
      alignItems: 'center'
  },
  congratImg: {
    marginBottom: 30
  },
  congratsText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5
  },
  pointsText:{
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20
  },
  nextBtn: {
    marginTop: 30
  }
});

export default Congratulations;