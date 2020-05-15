import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import AwardItem from './AwardItem'

import mainAward from '../data/images/mainAward.png'
import generalAward from '../data/images/generalAward.png'
import trophy from '../data/images/trophy.png'


const Awards = () =>{
    return(
        <View style={styles.awardWrapper}>
            <Image source={mainAward} />
            <Text style={styles.momBadge}>Healthy mom badge</Text>
            <View style={styles.awardOptionsWrapper}>
                <AwardItem points={12} maxPoints={20} title={'Diet'} logoImg={trophy}/>
                <View style={styles.divider}/>
                <AwardItem points={12} maxPoints={30} title={'General \nInformation'} logoImg={generalAward}/>
                <View style={styles.divider}/>
                <AwardItem points={12} maxPoints={20} title={'Exercises'} logoImg={trophy}/>
            </View>
        </View>
    );
} 

const styles = StyleSheet.create({
    awardWrapper: {
        alignItems: 'center', 
        marginTop: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 20, 
        paddingVertical: 30 ,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    awardOptionsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: 10
    },
    divider: {
        width: 1,
        height: 120,
        backgroundColor: '#242424',
        marginTop: 15
    },
    momBadge: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#242424',
        marginVertical: 15
    }
});

export default Awards