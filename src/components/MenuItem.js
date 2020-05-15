import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native'


const MenuItem = ({points, maxPoints, title, logoImg}) => {
    return(
        <View style={styles.itemWrapper}>
            <Text style={styles.pointsCounter}>{`${points} / ${maxPoints}`}</Text>
                <Image
                    style={styles.pathLogo}
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
        marginBottom: 30, 
        color: '#FFFFFF'
    }, 
    pointsCounter: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '800',
        marginBottom: 10, 
        color: '#FFFFFF'
    }, 
    pathLogo: {
        alignSelf: 'center'
    }
});

export default MenuItem;