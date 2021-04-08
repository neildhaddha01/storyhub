import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,KeyboardAvoidingView,ToastAndroid} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import db from '../config'
import firebase from 'firebase'


export default class WriteStory extends React.Component {
  constructor (props){
    super(props);
    this. state = {
      title : '',
      author: '',
      storyText: ''
    }
  }

  submitStory = ()=> {
    db.collection("stories").add({
      'title' : this.state.title,
      'author': this.state.author,
      'storyText': this.state.storyText,
      'date' : firebase.firestore.Timestamp.now().toDate()
    });
    this.setState({
      title : '',
      author: '',
      storyText: ''
    });
    ToastAndroid.show('Your story has been submittes', ToastAndroid.SHORT);
  }

    render() {
      return (
        <KeyboardAvoidingView style = {styles.container} behaviour="padding" enabled>
            <View style={styles.textContainer}>
            <Text style={styles.text}>StoryHub</Text>
            </View>
            <View style = {styles.inputView}>
               <TextInput
                 style = {{
                 width: 325,
                 height: 40,
                 borderWidth: 3,
                 borderRightWidth: 3,
                 fontSize: 20,
                 marginBottom: -30
                 }}
                 placeholder="Story Title"
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}/>
            </View>
            <View style = {styles.inputView}>
               <TextInput
                 style = {{
                 width: 325,
                 height: 40,
                 borderWidth: 3,
                 borderRightWidth: 3,
                 fontSize: 20,
                 marginBottom: -30
                 }}
                 placeholder="Author"
                 onChangeText= {(text)=>{
                     this.setState({
                         author: text
                     })
                 }}
                 value={this.state.author}/>
            </View>
            <View style = {styles.inputView}>
               <TextInput
                 style = {{
                 width: 325,
                 height: 425,
                 borderWidth: 3,
                 borderRightWidth: 3,
                 fontSize: 20,
                 marginBottom: -30
                 }}
                 placeholder="Write Your Story "
                 onChangeText= {(text)=>{
                     this.setState({
                         storyText: text
                     })
                 }}
                 value={this.state.storyText}
                 multiline = {true}/>
            </View>
            <View style = {styles.inputView}>
                <TouchableOpacity
                 style={styles.scanButton}
                 onPress={this.submitStory}>
                   <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
    inputView:{
      flexDirection: 'row',
      margin: 17.5
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    scanButton:{
      backgroundColor: 'grey',
      width: 100,
      borderWidth: 1.5,
    },
    textContainer:{
        backgroundColor: 'grey',
      },
    text:{
        color: 'white',
        padding: 17.5,
        fontSize: 18,
        textAlign: 'center',
      }
  });
  