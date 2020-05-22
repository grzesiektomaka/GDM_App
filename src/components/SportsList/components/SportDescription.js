import React from 'react'
import { View, StyleSheet, Text, ScrollView} from 'react-native'

 
const SportDescription = ({sportDescp}) => {
    return(
        <View style={styles.scrollWrapper}>
            <ScrollView>
                <View style={styles.sportDescpWrapper}>
                    <Text style={styles.sportNameStyle}>{sportDescp.name}</Text>
                    <Text style={styles.sportDescpStyle}>{sportDescp.text}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollWrapper: {
        height: 250
    },
    sportDescpWrapper: {
        alignItems: 'center',
        marginHorizontal: 30
    },
    sportNameStyle: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold', 
        marginTop: 10
    }, 
    sportDescpStyle: {
        color: '#FFFFFF',
        fontSize: 18,
        marginTop: 10   
    }
});

export default SportDescription;