import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import SportBtn from './components/SportBtn'
import SportDescription from './components/SportDescription'

import sportsDescriptions from '../../data/sports/sportsInfo'
import returnImg from '../../data/images/back.png'

 
const SportList = ({}) => {

    const [sportOption, setsportOption] = useState('main')
    const [sportOptionPrev, setsportOptionPrev] = useState('main')
    const [sportNumber, setSportNumber] = useState(0)

    const handleOption = (optionName) =>{
        setsportOptionPrev(sportOption)
        setsportOption(optionName)
    }

    const handleSport = (sportsNum) =>{
        setsportOptionPrev(sportOption)
        setsportOption('description')
        setSportNumber(sportsNum)
    }

    const handlePrevious = () =>{
        setsportOption(sportOptionPrev)
    }

    const handlePrevToMain = () =>{
        setsportOption('main')
    }

    return(
        <View >
            { sportOption == 'main' && 
                <View style={styles.sportListMenuWrapper}>
                    <SportBtn btnText={'WATER AEROBICS'} btnAction={() => handleOption('water')} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'CARDIO'} btnAction={() => setsportOption('cardio')} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'SAFE YOGA'} btnAction={() => setsportOption('yoga')} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'WALKING'} btnAction={() => handleSport(13)} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'CYCLING'} btnAction={() => handleSport(14)} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'RESISTANCE TRAINING'} btnAction={() => setsportOption('resistance')} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'RED LIST'} btnAction={() => setsportOption('redlist')} />
                </View>
            }
            {   sportOption == 'water' && 
                <View style={styles.sportListMenuWrapper}>
                    <TouchableOpacity onPress={() => handlePrevToMain()} style={styles.returnBtn}>
                        <Image source={returnImg}/>
                    </TouchableOpacity>
                    <SportBtn btnText={'WARM UP'} btnAction={() => handleSport(0)} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'SQUAT'} btnAction={() => handleSport(1)} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'KNEE UP'} btnAction={() => handleSport(2)} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'BEG LEG CURL'} btnAction={() => handleSport(3)} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'SWIMMING'} btnAction={() => handleSport(4)} />
                </View>
            }
            { sportOption == "cardio" && 
                <View style={styles.sportListMenuWrapper}>
                    <TouchableOpacity onPress={() => handlePrevToMain()} style={styles.returnBtn}>
                        <Image source={returnImg}/>
                    </TouchableOpacity>
                    <Text style={styles.sportTxtStyle}>Get your heart pumping and boost circulation with these faster-paced moves. For most of these exercises, you’ll need a pool with a deep end.</Text>
                    <SportBtn btnText={'FLUTTER KICK'} btnAction={() => handleSport(5)} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'TREADING WATER'} btnAction={() => handleSport(6)} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'EXPERT TIP'} btnAction={() => handleSport(7)} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'CAUTIONS'} btnAction={() => handleSport(8)} />
                </View>
            }
            { sportOption == "yoga" && 
                <View style={styles.sportListMenuWrapper}>
                    <TouchableOpacity onPress={() => handlePrevToMain()} style={styles.returnBtn}>
                        <Image source={returnImg}/>
                    </TouchableOpacity>
                    <Text style={styles.sportTxtStyle}>Not all postures in yoga are okay in pregnancy, so make sure the instructor knows you’re pregnant and adjusts the postures you perform. However, here are some exercises that are safer compared to others in the pregnancy.</Text>
                    <SportBtn btnText={`COBLER'S POSE`} btnAction={() => handleSport(9)} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'PELVIC TILT'} btnAction={() => handleSport(10)} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'SQUATTING'} btnAction={() => handleSport(11)} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'SIDE-LYING'} btnAction={() => handleSport(12)} />
                </View>
            }
            { sportOption == "resistance" && 
                <View style={styles.sportListMenuWrapper}>
                    <TouchableOpacity onPress={() => handlePrevToMain()} style={styles.returnBtn}>
                        <Image source={returnImg}/>
                    </TouchableOpacity>
                    <Text style={styles.sportTxtStyle}>Women who use resistance band exercise training at a moderate intensity three days a week can improve their glucose level. </Text>
                    <SportBtn btnText={`CONTRAINDICATIONS`} btnAction={() => handleSport(15)} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'BASIC ROUTINE'} btnAction={() => handleSport(16)} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'PLANK'} btnAction={() => handleSport(17)} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'BIRD DOG'} btnAction={() => handleSport(18)} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'SIDE BRIDGE'} btnAction={() => handleSport(19)} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'KETTLEBELL'} btnAction={() => handleSport(20)} />
                </View>
            }
            { sportOption == "redlist" && 
                <View style={styles.sportListMenuWrapper}>
                    <TouchableOpacity onPress={() => handlePrevToMain()} style={styles.returnBtn}>
                        <Image source={returnImg}/>
                    </TouchableOpacity>
                    <Text style={styles.sportTxtStyle}>List of forbidden exercises</Text>
                    <SportBtn btnText={`BASKETBALL`} btnAction={() => handleSport(21)} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'KICKBOXING'} btnAction={() => handleSport(22)} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'CLIMBING'} btnAction={() => handleSport(23)} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'SOCCER'} btnAction={() => handleSport(24)} />
                    <View style={styles.divider}/>
                    <SportBtn btnText={'OTHERS'} btnAction={() => handleSport(25)} />
                </View>
            }
            {  sportOption == "description" &&
                <View>
                    <TouchableOpacity onPress={() => handlePrevious()} style={styles.returnBtn}>
                        <Image source={returnImg}/>
                    </TouchableOpacity>
                    <SportDescription sportDescp={sportsDescriptions[sportNumber]} />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    sportListMenuWrapper: {
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 20
    },  
    divider: {
        width: 20,
        height: 1,
        backgroundColor: '#FFFFFF',
        marginVertical: 10
    },
    sportTxtStyle: {
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 20,
        marginTop:8,
        fontSize: 16
    },
    returnBtn: {
        alignSelf: 'flex-start',
        marginLeft: 30
    }
});

export default SportList;