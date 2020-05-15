import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import MenuItem from './MenuItem'

import diet from '../data/images/diet.png'
import generalInfo from '../data/images/information.png'
import exercises from '../data/images/exercises.png'
import drug from '../data/images/drug.png'

 
const Menu = ({selectScreen}) => {
    return(
        <View style={styles.menuWrapper}>
            <Text style={styles.menuHeader}>What do you want to ask for ?</Text>
            <View style={styles.menuOptionsWrapper}>
                <TouchableOpacity >
                    <MenuItem points={12} maxPoints={20} title={'Diet'} logoImg={diet}/>
                </TouchableOpacity>
                <View style={styles.divider}/>
                <TouchableOpacity onPress={() => selectScreen('general')} >
                    <MenuItem points={12} maxPoints={30} title={'General \nInformation'} logoImg={generalInfo}/>
                </TouchableOpacity>
                <View style={styles.divider}/>
                <TouchableOpacity>
                    <MenuItem points={12} maxPoints={20} title={'Exercises'} logoImg={exercises}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btnReminder}>
                <Image source={drug}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    menuWrapper: {
        marginTop: 50,
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
        marginRight: 15,
        marginTop: 80
    }
});

export default Menu;