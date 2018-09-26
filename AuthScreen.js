import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image
} from 'react-native';
import { app } from './FirebaseConfig';
import DropdownAlert from 'react-native-dropdownalert';

export default class AuthScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email   : '',
          password: '',
        }
    }

    itemAction(item) {
        switch (item.type) {
          case 'close':
            this.closeAction();
            break;
          default:
            const random = Math.floor(Math.random() * 1000 + 1);
            const title = item.type + ' #' + random;
            this.dropdown.alertWithType(item.type, title, item.message);
        }
      }

    async login(email, pass) {
    
        try {
            await app.auth()
                .signInWithEmailAndPassword(email, pass);
    
            console.log("Logged In!");
            // Redirection vers la page d'Accueil.
    
        } catch (error) {
            console.log(error.toString())
            // Affiche les erreurs de connection (erreur de format)
        }
    
    }

    async signup(email, pass) {

        try {
            await app.auth()
                .createUserWithEmailAndPassword(email, pass);
    
            console.log("Account created");
            this.itemAction({type : "success",message : "L'enregistrement s'est effectué avec succès.", title : "Données validées !"});
            this.setState({
                email   : '',
                password: '',
              })
            // Netoyer les champs + alert de confirmation
    
        } catch (error) {
            console.log(error.toString())
            this.itemAction({type : "error",message : "Une erreur est survenue lors de l'enregistrement.", title : "Données refusées !"});
            // Affiche les erreurs de connection (erreur de format)
        }
    
    }

    async logout() {

        try {
    
            await app.auth().signOut();

            console.log("Logged out!");
            // Redirection vers la page de login.
    
        } catch (error) {
            console.log(error);
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
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}    
                />
            </View>
        
            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
                <TextInput style={styles.inputs}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}/>
            </View>

            <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.login(this.state.email, this.state.password)}>
            <Text style={styles.signUpText}>Log in</Text>
            </TouchableHighlight>

            <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.signup(this.state.email, this.state.password)}>
            <Text style={styles.signUpText}>Sign up</Text>
            </TouchableHighlight>

            <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.logout()}>
            <Text style={styles.signUpText}>Log out</Text>
            </TouchableHighlight>

            <DropdownAlert
          ref={ref => this.dropdown = ref}
          showCancel={true}
        //   onClose={data => this.handleClose(data)}
        //   onCancel={data => this.handleCancel(data)}
          imageSrc={'https://facebook.github.io/react-native/docs/assets/favicon.png'}
        />
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