import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image
} from 'react-native';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAMx3bQh349wukXh-sey6VNWkD-KyMLQmk",
    authDomain: "degroof-app.firebaseapp.com",
    databaseURL: "https://degroof-app.firebaseio.com",
    projectId: "degroof-app",
    storageBucket: "degroof-app.appspot.com",
    messagingSenderId: "102902115096"
  };
firebase.initializeApp(config);

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        state = {
          email   : '',
          password: '',
        }
    }

    async signup(email, pass) {

        try {
            await firebase.auth()
                .createUserWithEmailAndPassword(email, pass);
    
            console.log("Account created");
            // Redirection vers la page d'Accueil.
    
        } catch (error) {
            console.log(error.toString())
            // Affiche les erreurs de connection (erreur de format)
        }
    
    }

    // Le visuel est à modifier pour respecter la charte graphique.
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                <TextInput style={styles.inputs}
                    placeholder="Email"
                    keyboardType="email-address"
                    onChangeText={(email) => this.setState({email})}/>
            </View>
        
            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
                <TextInput style={styles.inputs}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}/>
            </View>

            <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.signup(this.state.email, this.state.password)}>
            <Text style={styles.signUpText}>Sign up</Text>
            </TouchableHighlight>
      </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00b5ec',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    signupButton: {
      backgroundColor: "#FF4DFF",
    },
    signUpText: {
      color: 'white',
    }
  });