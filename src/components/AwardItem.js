import React from 'react'
import { View, Image, StyleSheet, Text} from 'react-native'


const AwardItem = ({points, maxPoints, title, logoImg, disabled}) => {
    return(
        <View style={[styles.itemWrapper, disabled ? styles.awardDisabled : styles.awardWon]}>
            <Text style={styles.pointsCounter}>{`${points} / ${maxPoints}`}</Text>
            <Image
                style={styles.awardLogo}
                source={logoImg}
            ></Image>
            <Text style={styles.textStyles}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemWrapper: {
        alignItems: 'center',
        flex: 1
    },
    textStyles: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '800',
        // marginBottom: 20, 
        color: '#242424'
    }, 
    pointsCounter: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '800',
        marginBottom: 10, 
        color: '#242424'
    }, 
    awardLogo: {
        alignSelf: 'center'
    },
    awardDisabled: {
        opacity: 0.2
    },
    awardWon: {
        opacity: 1
    }
});

export default AwardItem;