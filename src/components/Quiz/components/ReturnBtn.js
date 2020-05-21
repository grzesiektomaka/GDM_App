import React from 'react'
import { Text, StyleSheet, TouchableOpacity} from 'react-native'

 
const ReturnBtn = ({returnAction}) => {
    return(
        <TouchableOpacity 
            style={styles.btnReturnWrapper}
            onPress={returnAction}
        >
            <Text style={styles.btnReturnText}>Return to the main menu</Text>
        </TouchableOpacity>         
    )
}

const styles = StyleSheet.create({
    btnReturnWrapper: {
        marginTop: 15
    },
    btnReturnText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#7D61EC'
    }
});

export default ReturnBtn;