import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import DietPage from './components/DietPage'
import NextBtn from '../NextBtn'

import dietDescription from '../../data/diet/dietDescription'

 
const DietInfo = ({startQuiz}) => {
    const [dietPageNum, setDietPageNum] = useState(0)

    const handleDietPage = () =>{
        if(dietPageNum + 1 < dietDescription.length){
            setDietPageNum(dietPageNum + 1)
        }else{
            startQuiz()
        }
    }

    return(
        <>
            <View style={styles.dietInfoWrapper}>
                <DietPage dietDescp={dietDescription[dietPageNum]}/>
            </View>
            <NextBtn nextMessage={() => handleDietPage()}/>
        </>
    )
}

const styles = StyleSheet.create({

});

export default DietInfo;