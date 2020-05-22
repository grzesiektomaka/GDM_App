import React from 'react'
import { View, StyleSheet, Text, ScrollView} from 'react-native'

 
const DietPage = ({dietDescp}) => {
    return(
        <View style={styles.scrollWrapper}>
            <ScrollView>
                <View style={styles.dietDescpWrapper}>
                    <Text style={styles.dietNameStyle}>{dietDescp.name}</Text>
                    <Text style={styles.dietDescpStyle}>{dietDescp.text}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollWrapper: {
        height: 250
    },
    dietDescpWrapper: {
        alignItems: 'center',
        marginHorizontal: 30
    },
    dietNameStyle: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold', 
        marginTop: 10
    }, 
    dietDescpStyle: {
        color: '#FFFFFF',
        fontSize: 18,
        marginTop: 10   
    }
});

export default DietPage;