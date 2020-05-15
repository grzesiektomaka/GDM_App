import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

import award from '../data/images/award.png'
import returnImg from '../data/images/return.png'


const Header = ({points, modalControl, selectScreen}) => {
    return(
        <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={() => selectScreen('menu')}>
                <Image 
                    style={styles.headerIcons}
                    source={returnImg} 
                />
            </TouchableOpacity>
            <View style={styles.logoWrapper}>
                <TouchableOpacity>
                    <Text style={styles.logoText}>SweetBaby</Text>
                </TouchableOpacity>
                <Text style={styles.pointsText}>{`${points} / 70`}</Text>
            </View>
            <TouchableOpacity onPress={modalControl}>
                <Image 
                    style={styles.headerIcons}
                    source={award} 
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30, 
        alignItems: 'center',
        marginHorizontal: 30,
        marginBottom: 20    
    },
    logoText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        color: '#FFFFFF'
    },
    pointsText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#FFFFFF'
    }, 
    headerIcons: {
        marginBottom: 15    
    }

});

export default Header;