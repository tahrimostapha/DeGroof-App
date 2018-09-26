import React, { Component } from 'react';
import { ImageBackground, Image } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Separator } from 'native-base';
export default class ListSeparatorExample extends Component {
      static navigationOptions = {
      header: null,
  };
  render() {
    return (
      <Container>
        <ImageBackground source={require('../cover_grey.png')} style={{width: '100%', height: '100%'}}>
         <Text style={{
                                marginTop: 40, 
                                 color: '#4fbc83',
                                 fontWeight : 'bold',
                                 fontSize: 26,
                                 textAlign: 'center',
                                 alignItems: 'center',
                                 fontFamily: 'Palatino'}} > Your Projects
                            </Text>
        <Header />
        <Content>
          <Separator bordered>
            <Text>Active Projects</Text>
          </Separator>
          <ListItem>
            <Text>Project management 5 HOURS</Text>
          </ListItem>
          <ListItem last>
            <Text>Project Berail 1 HOURS</Text>
          </ListItem>
          <Separator bordered>
        
            <Text>Projects Done</Text>
          </Separator>
          <ListItem>
            <Text>Project REDneck 2 HOURS</Text>
          </ListItem>
          <ListItem last>
            <Text>Lee Allen Project 1 HOURS</Text>
          </ListItem>
        </Content>
        </ImageBackground>
      </Container>
    );
  }
}