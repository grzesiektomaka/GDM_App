import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import womanImage from '../data/images/woman.png'


const InitialScreen = ({navigation}) =>{
    return(
        <View style={styles.backgroundStyle}>
            <Text style={styles.headerTxt}>SweetBaby</Text>
            <Image source={womanImage}/>
            <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('Second')}>
                <Text style={styles.startTxt}>START</Text>
            </TouchableOpacity>
        </View>
    );
} 

const styles = StyleSheet.create({
    backgroundStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    headerTxt: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#FFFFFF',
        bottom: 15
    },
    startBtn: {
        backgroundColor: '#EC6162',
        borderRadius: 32,
        paddingHorizontal: 40,
        paddingVertical: 12,
        top: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    startTxt:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
});

export default withNavigation(InitialScreen)
