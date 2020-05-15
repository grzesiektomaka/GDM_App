import React from 'react'
import Conversation from '../components/Conversation'
import { View, StyleSheet } from 'react-native'
import Menu from '../components/Menu'
import Header from '../components/Header'
import { withNavigation } from 'react-navigation'
import BackgroundImg from '../components/BackgroundImg'
import Award from '../components/Awards'
import Modal from 'react-native-modal'
import Quiz from '../components/Quiz/Quiz'

import generalInfoScenario from '../data/scenarios/GeneralInfoScenario'
import AwardItem from '../components/AwardItem'

 
class MainScreen extends React.Component {

  state = {
    awardModal: false,
    screen: 'menu', 
    quizModal: false
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
 
  
  render() { 

    const {screen, quizModal, awardModal} = this.state

    return (
      <View style={styles.wrapper}>
          <Header 
            points={36} 
            modalControl={this.toggleModal}
            selectScreen={this.selectScreen}
          />
          <BackgroundImg/>
          { screen == 'menu' &&
            <Menu selectScreen={this.selectScreen} />
          }
          { screen == 'general' &&
            <Conversation 
              scenario={generalInfoScenario}
              startQuiz={this.startQuiz}
            />
          }
          <Modal
            isVisible={quizModal} 
            backdropOpacity={0.5} 
            swipeDirection = {['up', 'down']}
            onSwipeComplete = {() => this.closeQuiz()}
          >
            <Quiz quizName={screen}/>
          </Modal>
          <Modal  
            isVisible={awardModal} 
            backdropOpacity={0.5} 
            swipeDirection = {['up', 'down']}
            onSwipeComplete = {() => this.toggleModal()}
          >
            <Award />
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