import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native'
import MenuItem from './MenuItem'

import diet from '../data/images/diet.png'
import generalInfo from '../data/images/information.png'
import exercises from '../data/images/exercises.png'
import drug from '../data/images/drug.png'
import yogablack from '../data/images/yogablack.png'
import { max } from 'react-native-reanimated'
 
const Menu = ({
            selectScreen, 
            dietDisabled, 
            exercisesDisabled, 
            sportsListDisabled,
            showAlert, 
            maxPointsGeneral, 
            generalPoints,
            maxPointsExercises,
            maxPointsDiet,
            dietPoints,
            exercisesPoints,
            showMedicineReminder}) => {

    const handleDiet = () =>{
        if(dietDisabled != true){
            selectScreen('diet')
        }else{
            showAlert()
        }
    }

    const handleExercise = () =>{
        if(exercisesDisabled != true){
            selectScreen('exercises')
        }else{
            showAlert()
        }
    }

    const handleSports = () =>{
        if(sportsListDisabled != true){
            selectScreen('sports')
        }else{
            showAlert()
        }
    }

    return(
        <View style={styles.menuWrapper}>
            <Text style={styles.menuHeader}>What do you want to ask for ?</Text>
            <View style={styles.menuOptionsWrapper}>
                <TouchableOpacity  onPress={() => handleDiet()} style={dietDisabled ? styles.menuOptionDisabled : styles.menuOptionNormal } >
                    <MenuItem points={dietPoints} maxPoints={maxPointsDiet} title={'Diet'} logoImg={diet}/>
                </TouchableOpacity>
                <View style={styles.divider}/>
                <TouchableOpacity onPress={() => selectScreen('general')} >
                    <MenuItem points={generalPoints} maxPoints={maxPointsGeneral} title={'General \nInformation'} logoImg={generalInfo}/>
                </TouchableOpacity>
                <View style={styles.divider}/>
                <TouchableOpacity onPress={() => handleExercise()} style={exercisesDisabled ? styles.menuOptionDisabled : styles.menuOptionNormal }>
                    <MenuItem points={exercisesPoints} maxPoints={maxPointsExercises} title={'Exercises'} logoImg={exercises}/>
                </TouchableOpacity>
            </View>
            <View style={styles.btnWrapper}>
                <TouchableOpacity 
                    style={[styles.btnExercises, sportsListDisabled ? styles.menuOptionDisabled : styles.menuOptionNormal]}
                    onPress={() => handleSports()}    
                >
                    <Image source={yogablack}/>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.btnReminder} onPress={showMedicineReminder}>
                    <Image source={drug}/>
                </TouchableOpacity> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menuWrapper: {
        marginTop: 40,
        marginHorizontal: 15
    },
    menuOptionsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15
    },
    menuHeader: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '800',
        marginBottom: 30, 
        color: '#FFFFFF'
    }, 
    divider: {
        width: 1,
        height: 120,
        backgroundColor: '#FFFFFF',
        marginTop: 15
    },
    btnWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    btnReminder: {
        backgroundColor: '#FFFFFF',
        borderRadius: 60,
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: 80
    },
    btnExercises: {
        backgroundColor: '#FFFFFF',
        borderRadius: 60,
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignSelf: 'flex-end',
        marginRight: 40,
        marginTop: 80
    },
    menuOptionDisabled: {
        opacity: 0.65
    },
    menuOptionNormal: {
        opacity: 1
    }
});

export default Menu;