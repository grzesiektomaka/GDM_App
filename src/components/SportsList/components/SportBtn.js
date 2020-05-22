import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native'

 
const SportBtn = ({btnText, btnAction}) => {
    return(
        <TouchableOpacity 
            style={styles.sportBtnStyle}
            onPress={btnAction}
        >
            <Text style={styles.sportBtnTxtStyle}>{btnText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    sportBtnStyle:{

    },
    sportBtnTxtStyle:{
        color: '#FFFFFF',
        fontSize: 20,
    }
});

export default SportBtn;