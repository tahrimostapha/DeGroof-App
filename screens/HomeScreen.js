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
            <Left>
             <Image source={require('../logo_DP.png')} />
            </Left>
            <Form>
            <Item>
                <Input placeholder="Username" />
                    </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
         <Button success><Text> Valider </Text></Button>
          </Form>
        </Content>
        </ImageBackground>
      </Container>
    );
  }
}


 
       