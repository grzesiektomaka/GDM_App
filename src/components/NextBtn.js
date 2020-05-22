import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image} from 'react-native'

import arrow from '../data/images/arrow.png'

const NextBtn = ({nextMessage}) =>{
    return(
        <View style={styles.container}>
                <TouchableOpacity style={styles.btnWrapper} onPress={nextMessage}>
                        <Image source={arrow} style={styles.btnArrow}/>
                </TouchableOpacity>
        </View> 
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center'
      },
    btnWrapper: {
        height: 70,
        width: 70,
        borderRadius: 64,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      btnArrow: {
        left: 4
      }
});

export default NextBtn