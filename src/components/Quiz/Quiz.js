import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import IntroQuiz from './components/IntroQuiz'
 
const Quiz = ({quizName}) => {
    return(
        <View style={styles.quizWrapper}>
            <IntroQuiz quizName={quizName}/>
        </View>
    )
}

const styles = StyleSheet.create({
   
});

export default Quiz;