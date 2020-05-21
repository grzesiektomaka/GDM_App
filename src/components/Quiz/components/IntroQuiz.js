import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import QuizBtn from './QuizBtn'
import ReturnBtn from './ReturnBtn'

 
const IntroQuiz = ({startQuiz, returnToMenu}) => {
    return(
        <View style={styles.quizIntroWrapper}>
            <Text style={styles.exclamationTxt}>!</Text>
            <Text style={styles.quizIntroText}>Take a quiz and unlock new chapter !</Text>
            <QuizBtn btnText={'START'} btnAction={startQuiz}/>
            <ReturnBtn returnAction={returnToMenu}/>
        </View>
    )
}

const styles = StyleSheet.create({
    exclamationTxt:{
       fontSize: 20,
       fontWeight: 'bold',
       borderWidth: 2,
       borderRadius: 40,
       alignSelf: 'center', 
       paddingVertical: 6,
       paddingHorizontal: 18,
       textAlign: 'center',
    },
    quizIntroText: {
       fontSize: 20,
       textAlign: 'center',
       marginTop:30
    }, 
    btnStartWrapper: {  
        borderWidth: 2,
        alignSelf: 'center',
        borderRadius: 15,
        padding: 7,
        paddingHorizontal: 20,
        borderColor: '#7D61EC',
        marginTop: 30
    },
    btnStartText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#7D61EC',
        textAlign: 'center'
    },

});

export default IntroQuiz;