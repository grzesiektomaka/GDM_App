import React from 'react'
import { Text, StyleSheet, TouchableOpacity} from 'react-native'

 
const QuizBtn = ({btnText, btnAction}) => {
    return(
        <TouchableOpacity 
            style={styles.btnWrapper} 
            onPress={btnAction}>
            <Text style={styles.btnText}>{btnText}</Text>
        </TouchableOpacity>          
    )
}

const styles = StyleSheet.create({
    btnWrapper: {  
        borderWidth: 2,
        alignSelf: 'center',
        borderRadius: 15,
        padding: 7,
        paddingHorizontal: 20,
        borderColor: '#7D61EC',
        marginTop: 30
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#7D61EC',
        textAlign: 'center'
    }
});

export default QuizBtn;