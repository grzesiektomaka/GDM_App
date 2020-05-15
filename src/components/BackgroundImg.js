import React from 'react'
import { View, Image, StyleSheet} from 'react-native'

import backgroundImage from '../data/images/woman2.png'


const BackgroundImage = () => {
    return(
        // <View style={styles.backgroundImageWrapper}>
            <Image source={backgroundImage} style={styles.backgroundImage}/>
        // {/* </View> */}
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    }
});

export default BackgroundImage;