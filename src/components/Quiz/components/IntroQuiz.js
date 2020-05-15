import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'


 
const IntroQuiz = ({quizName}) => {
    return(
        <View style={styles.quizIntroWrapper}>
            <Text>{quizName}</Text>
            <Text>Take a quiz and unlock new chapter !</Text>
            <TouchableOpacity>
                <Text>START</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
   
});

export default IntroQuiz;