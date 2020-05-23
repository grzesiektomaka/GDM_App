import React from 'react'
import { View, StyleSheet, Text, AsyncStorage } from 'react-native'
import Conversation from '../components/Conversation'
import Menu from '../components/Menu'
import Header from '../components/Header'
import { withNavigation } from 'react-navigation'
import BackgroundImg from '../components/BackgroundImg'
import Award from '../components/Awards'
import Modal from 'react-native-modal'
import Quiz from '../components/Quiz/Quiz'
import LockedAlert from '../components/LockedAlert'
import SportList from '../components/SportsList/SportsList'
import DietInfo from '../components/Diet/DietInfo'

import generalInfoScenario from '../data/scenarios/GeneralInfoScenario'
import exercisesScenario from '../data/scenarios/ExercisesScenario'
import AwardItem from '../components/AwardItem'
import generalInfoQuiz from '../data/quizes/GeneralInfoQuiz'
import exercisesQuiz from '../data/quizes/ExercisesQuiz'
import dietQuiz from '../data/quizes/DietQuiz'

 
class MainScreen extends React.Component {

  state = {
    awardModal: false, 
    screen: 'menu', 
    quizModal: false, 
    maxPointsGeneral: generalInfoQuiz.length * 5,
    generalPoints: 0,
    maxPointsExercises: exercisesQuiz.length * 5,
    exercisesPoints: 0,
    maxPointsDiet: dietQuiz.length * 5,
    dietPoints: 0,
    dietDisabled: true,
    exercisesDisabled: true,
    sportsListDisabled: true,
    lockedAlert: false,
    medicineReminder: false
  }; 
 
  // componentDidMount(){
  //   this._retrieveData()
  // }

  // _storeData = async () => {
  //   try {
  //     await AsyncStorage.setItem('@general_points', this.state.generalPoints.toString())
  //     // await AsyncStorage.setItem('@diet_points', this.state.dietPoints.toString())
  //     // await AsyncStorage.setItem('@exercises_points', this.state.exercisesPoints.toString())
  //   } catch (e) {
  //       console.log(e)
  //   }
  // }

  // _retrieveData = async () => {
  //   try {
  //     const general = await AsyncStorage.getItem('@general_points')
  //     // const diet = await AsyncStorage.getItem('@diet_points')
  //     // const exercises = await AsyncStorage.getItem('@exercises_points')
  //     if(general !== null) {
  //       this.setState({generalPoints: parseInt(general)})
        
  //     }else{
  //     }
  //   } catch(e) {
  //     console.log(e)
  //   }
  // }
 
  toggleModal = () => {
    this.setState({awardModal: !this.state.awardModal});
  };

  selectScreen = (screenName) => {
    this.setState({screen: screenName})
  } 

  startQuiz = () =>{
    this.setState({
      quizModal: true
    })
  }

  closeQuiz = () =>{
    this.setState({
      quizModal: false
    })
  }

  getResultGeneral = (pt) =>{
    this.setState({generalPoints: pt})
    pt >= this.state.maxPointsGeneral * 0.5 ? 
    this.setState({dietDisabled: false}) :
    this.setState({dietDisabled: true})
    // this._storeData()
  }

  getResultExercises = (pt) =>{
    this.setState({exercisesPoints: pt})
    pt >= this.state.maxPointsExercises * 0.5 ? 
    this.setState({sportsListDisabled: false}) :
    this.setState({sportsListDisabled: true})
    // this._storeData()
  }

  getResultDiet = (pt) =>{
    this.setState({dietPoints: pt})
    pt >= this.state.maxPointsDiet * 0.5 ? 
    this.setState({exercisesDisabled: false}) :
    this.setState({exercisesDisabled: true})
    // this._storeData()
  }
 
 
  
  render() { 


    const {
      screen, 
      quizModal, 
      awardModal,  
      maxPointsGeneral, 
      generalPoints,
      maxPointsExercises,
      exercisesPoints,
      maxPointsDiet,
      dietPoints,
      dietDisabled, 
      exercisesDisabled,
      sportsListDisabled,
      lockedAlert,
      medicineReminder
    } = this.state

    let res = generalPoints + dietPoints + exercisesPoints
    let max = maxPointsExercises + maxPointsGeneral + maxPointsDiet

    // console.log(generalPoints)

    return (
      <View style={styles.wrapper}>
          <Header 
            resultPoints={res} 
            maxPoints={max}
            modalControl={this.toggleModal}
            selectScreen={this.selectScreen}
          />
          <BackgroundImg/>
          { screen == 'menu' &&
            <Menu 
              selectScreen={this.selectScreen} 
              dietDisabled={dietDisabled}
              exercisesDisabled={exercisesDisabled}
              sportsListDisabled={sportsListDisabled}
              maxPointsGeneral={maxPointsGeneral}
              generalPoints={generalPoints}
              maxPointsExercises={maxPointsExercises}
              exercisesPoints={exercisesPoints}
              maxPointsDiet={maxPointsDiet}
              dietPoints={dietPoints}
              showAlert={() => this.setState({lockedAlert: true})}
              showMedicineReminder={() => this.setState({medicineReminder: true})}
            />
          }
          { screen == 'general' &&
            <Conversation 
              scenario={generalInfoScenario}
              startQuiz={this.startQuiz}
            />
          }
          { screen == 'diet' &&
            <DietInfo startQuiz={this.startQuiz}/>
          }
          {
            screen == 'exercises' && 
            <Conversation
              scenario={exercisesScenario}
              startQuiz={this.startQuiz}
            />
          }
          {
            screen == 'sports' && 
            <SportList />
          }
          <Modal 
            isVisible={quizModal} 
            backdropOpacity={0.5} 
            swipeDirection = {['up', 'down']} 
            onSwipeComplete = {() => this.closeQuiz()}
          >
            { screen == 'general' && 
              <Quiz 
                quizName={screen} 
                quiz={generalInfoQuiz} 
                maxPoints={maxPointsGeneral}
                getResult={(pt) => this.getResultGeneral(pt)}
                closeQuiz={() => this.closeQuiz()}
                selectScreen={this.selectScreen}
              />
            }
            { screen == 'diet' && 
              <Quiz 
                quizName={screen} 
                quiz={dietQuiz} 
                maxPoints={maxPointsDiet}
                getResult={(pt) => this.getResultDiet(pt)}
                closeQuiz={() => this.closeQuiz()}
                selectScreen={this.selectScreen}
              />
            }
            { screen == 'exercises' && 
              <Quiz 
                quizName={screen} 
                quiz={exercisesQuiz} 
                maxPoints={maxPointsExercises}
                getResult={(pt) => this.getResultExercises(pt)}
                closeQuiz={() => this.closeQuiz()}
                selectScreen={this.selectScreen}
              />
            }
          </Modal>
          <Modal  
            isVisible={awardModal} 
            backdropOpacity={0.5} 
            swipeDirection = {['up', 'down']}
            onSwipeComplete = {() => this.toggleModal()}
          >
            <Award              
              dietDisabled={dietDisabled}
              exercisesDisabled={exercisesDisabled}
              allUnlocked={sportsListDisabled}
              maxPointsGeneral={maxPointsGeneral}
              generalPoints={generalPoints}
              maxPointsExercises={maxPointsExercises}
              exercisesPoints={exercisesPoints}
              maxPointsDiet={maxPointsDiet}
              dietPoints={dietPoints}
            /> 
          </Modal>
          <Modal
                isVisible={lockedAlert}  
                backdropOpacity={0.5} 
                swipeDirection = {['up', 'down']} 
                onSwipeComplete = {() => this.setState({lockedAlert: false})}
            >
             <LockedAlert closeHandle={() => this.setState({lockedAlert: false})} />
          </Modal>
          <Modal
                isVisible={medicineReminder}  
                backdropOpacity={0.5} 
                swipeDirection = {['up', 'down']} 
                onSwipeComplete = {() => this.setState({medicineReminder: false})}
            >
             <LockedAlert closeHandle={() => this.setState({lockedAlert: false})} />
          </Modal>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }, 
});

export default withNavigation(MainScreen)