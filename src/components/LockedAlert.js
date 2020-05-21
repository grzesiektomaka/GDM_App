import React from 'react'
import { View, StyleSheet, Text} from 'react-native'
import AlertBtn from './Quiz/components/QuizBtn'

 
const LockedAlert = ({closeHandle}) => {
    return(
        <View style={styles.lockedAlertWrapper}>
            <Text style={styles.exclamationTxt}>!</Text>
            <Text style={styles.alertText}>You have not unlocked this chapter yet ! </Text>
            <AlertBtn btnText={'CLOSE'} btnAction={closeHandle}/>
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
  lockedAlertWrapper: {
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
  },
  alertText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20
  }
});

export default LockedAlert;