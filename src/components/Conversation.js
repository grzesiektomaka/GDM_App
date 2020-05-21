import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import NextBtn from '../components/NextBtn'
import { Bubble } from 'react-native-gifted-chat'

import arrow from '../data/images/arrow.png'


 
class Conversation extends React.Component {
  
  state = {
      messages: [],
      msgCounter: 0,
    }

  renderInputToolbar(){
      return(
        <View>
        </View>
      )
  }

  componentDidMount() {
    this.onSend(this.props.scenario[this.state.msgCounter])
  }

  renderBubble(props) { 
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#7EAFF4'
          },
          left: {
            backgroundColor: "#EC6163"
          }
        }}
        textStyle={{
          left: {
            color: '#FFFFFF'
          }
        }}
      />
    )
  }


  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))

    this.setState({
        msgCounter: this.state.msgCounter + 1
    })

    if(this.state.msgCounter >= this.props.scenario.length) {
      this.props.startQuiz()
    }
  }

 
  render() { 


    return (
      <>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          renderInputToolbar={() => this.renderInputToolbar()}
          renderBubble={this.renderBubble}
          user={{
          _id: 1,
          }}
        />
        <NextBtn nextMessage={() => this.onSend(this.props.scenario[this.state.msgCounter])}/>
        
      </>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        // paddingTop: 150, 
      
      },
      btnWrapper: {
        height: 70,
        width: 70,
        borderRadius: 64,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'absolute',
        // bottom: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      btnArrow: {
        left: 4
      }
});

export default Conversation
