import React from 'react'
import Conversation from '../components/Conversation'
import { View, StyleSheet, Text } from 'react-native'
import Menu from '../components/Menu'
import Header from '../components/Header'
import { withNavigation } from 'react-navigation'
import BackgroundImg from '../components/BackgroundImg'
import Award from '../components/Awards'
import Modal from 'react-native-modal'
import Quiz from '../components/Quiz/Quiz'
import LockedAlert from '../components/LockedAlert'

import generalInfoScenario from '../data/scenarios/GeneralInfoScenario'
import exercisesScenario from '../data/scenarios/ExercisesScenario'
import AwardItem from '../components/AwardItem'
import generalInfoQuiz from '../data/quizes/GeneralInfoQuiz'
import exercisesQuiz from '../data/quizes/ExercisesQuiz'

 
class MainScreen extends React.Component {

  state = {
    awardModal: false, 
    screen: 'menu', 
    quizModal: false, 
    maxPointsGeneral: generalInfoQuiz.length * 5,
    generalPoints: 0,
    maxPointsExercises: exercisesQuiz.length * 5,
    exercisesPoints: 0,
    dietDisabled: true,
    exercisesDisabled: false,
    lockedAlert: false,
  }; 

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
  }

  getResultExercises = (pt) =>{
    this.setState({exercisesPoints: pt})
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
      dietDisabled, 
      exercisesDisabled,
      lockedAlert
    } = this.state

    console.log(generalPoints)

    return (
      <View style={styles.wrapper}>
          <Header 
            points={36} 
            modalControl={this.toggleModal}
            selectScreen={this.selectScreen}
          />
          <BackgroundImg/>
          { screen == 'menu' &&
            <Menu 
              selectScreen={this.selectScreen} 
              dietDisabled={dietDisabled}
              exercisesDisabled={exercisesDisabled}
              maxPointsGeneral={maxPointsGeneral}
              generalPoints={generalPoints}
              maxPointsExercises={maxPointsExercises}
              exercisesPoints={exercisesPoints}
              showAlert={() => this.setState({lockedAlert: true})}
            />
          }
          { screen == 'general' &&
            <Conversation 
              scenario={generalInfoScenario}
              startQuiz={this.startQuiz}
            />
          }
          {
            screen == 'exercises' && 
            <Conversation
              scenario={exercisesScenario}
              startQuiz={this.startQuiz}
            />
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
            <Award /> 
          </Modal>
          <Modal
                isVisible={lockedAlert} 
                backdropOpacity={0.5} 
                swipeDirection = {['up', 'down']} 
                onSwipeComplete = {() => this.setState({lockedAlert: false})}
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