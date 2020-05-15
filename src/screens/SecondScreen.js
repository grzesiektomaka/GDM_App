import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image} from 'react-native'
import { withNavigation } from 'react-navigation'

import backgroundImage from '../data/images/conversation.png'
import arrow from '../data/images/arrow.png'

const SecondScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.image}>
                <TouchableOpacity style={styles.btnWrapper} onPress={() => navigation.navigate('MainScreen')}>
                        <Image source={arrow} style={styles.btnArrow}/>
                </TouchableOpacity>
            </ImageBackground>
        </View> 
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
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

export default withNavigation(SecondScreen)