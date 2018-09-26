import React, { Component } from 'react';
import { ImageBackground, Image, TextInput } from 'react-native';
import { Container, Content, Button, Text, Item , Form } from 'native-base';
import { app } from '../FirebaseConfig';
import DropdownAlert from 'react-native-dropdownalert';
export default class AuthentificationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email   : '',
          password: '',
        }
    }

    static navigationOptions = {
        header: null,
    };


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
            this.props.navigation.navigate('ListProject');
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

        } catch (error) {
            console.log(error.toString())
            this.itemAction({type : "error",message : "Une erreur est survenue lors de l'enregistrement.", title : "Données refusées !"});
            // Affiche les erreurs de connection (erreur de format)
        }

    }
    
  render() {
    return (

        <Container>
            <ImageBackground source={require('../cover_grey.png')} style={{width: '100%', height: '100%'}}>
                <Content>
                    <Image 
                        source={require('../logo_DP.png')} 
                        style={{
                                width:120, 
                                marginLeft: 15 ,
                                resizeMode: 'contain',}}    
                     />

                    <Text style={{ 
                                 textAlign: 'center', 
                                 marginBottom: 25 , 
                                 fontSize: 26 }} 
                        > My DP Projects </Text>

                    <Form >

                        <Item style={{ marginBottom: 25 }}>
                        <TextInput style={{width: "100%", borderWidth: 0}}
                            placeholder="Email"
                            keyboardType="email-address"
                            onChangeText={(email) => this.setState({email})}
                            value={this.state.email}    
                        />
                        </Item>
                        <Item style={{ marginBottom: 30 }}>
                        <TextInput style={{width: "100%", borderWidth: 0}}
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}
                        />
                        </Item>

                        <Button success style={{ marginLeft: 40 }} onPress={() => this.login(this.state.email, this.state.password)}><Text> Login </Text></Button>

                        <Button transparent success block style={{ marginTop: 80 }} >
                        <Text style={{textAlign: 'center'}} onPress={() => this.signup(this.state.email, this.state.password)}>Sign Up</Text></Button>
                    </Form>
                </Content>
            </ImageBackground>
            <DropdownAlert
          ref={ref => this.dropdown = ref}
          showCancel={true}
        //   onClose={data => this.handleClose(data)}
        //   onCancel={data => this.handleCancel(data)}
          imageSrc={'https://facebook.github.io/react-native/docs/assets/favicon.png'}
        />
        </Container>
    );
  }
}


 
       