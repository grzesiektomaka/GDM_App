import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import AwardItem from './AwardItem'

import mainAward from '../data/images/mainAward.png'
import generalAward from '../data/images/generalAward.png'
import trophy from '../data/images/trophy.png'


const Awards = ({
    dietDisabled, 
    exercisesDisabled, 
    allUnlocked, 
    maxPointsGeneral,
    generalPoints,
    maxPointsExercises,
    exercisesPoints,
    maxPointsDiet,
    dietPoints
}) =>{
    return(
        <View style={styles.awardWrapper}>
            <Image source={mainAward} style={allUnlocked ? styles.awardDisabled : styles.awardWon } />
            <Text style={[styles.momBadge, allUnlocked ? styles.awardDisabled : styles.awardWon]}>Healthy mom badge</Text>
            <View style={styles.awardOptionsWrapper}>
                <AwardItem 
                    points={dietPoints} 
                    maxPoints={maxPointsDiet} 
                    title={'Diet'} 
                    logoImg={trophy} 
                    disabled={exercisesDisabled}
                />
                <View style={styles.divider}/>
                <AwardItem 
                    points={generalPoints} 
                    maxPoints={maxPointsGeneral} 
                    title={'General \nInformation'} 
                    logoImg={generalAward}
                    disabled={dietDisabled}
                />
                <View style={styles.divider}/>
                <AwardItem 
                    points={exercisesPoints} 
                    maxPoints={maxPointsExercises} 
                    title={'Exercises'} 
                    logoImg={trophy}
                    disabled={allUnlocked}
                />
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
    }, 
    awardDisabled: {
        opacity: 0.2
    },
    awardWon: {
        opacity: 1
    }
});

export default Awards