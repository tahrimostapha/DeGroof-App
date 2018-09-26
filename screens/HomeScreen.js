import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ImageBackground, Image } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item ,Input, Form } from 'native-base';
export default class HomeScreen extends Component {
  static navigationOptions = {
      header: null,
  };
    
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
                            <Input placeholder="Username" />
                        </Item>
                        <Item last style={{ marginBottom: 30 }}>
                            <Input placeholder="Password" />
                        </Item>

                        <Button success style={{ marginLeft: 40 }}><Text> Login </Text></Button>

                        <Button transparent success block style={{ marginTop: 80 }}>
                        <Text style={{textAlign: 'center'}} >Sign Up</Text></Button>
                    </Form>
                </Content>
            </ImageBackground>
        </Container>
    );
  }
}


 
       