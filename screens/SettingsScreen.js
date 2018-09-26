import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ImageBackground, Image } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item ,Input, Form, Picker } from 'native-base';

export default class SettingsScreen extends Component {
  constructor(props){
		super(props);
		this.state = {
			username: "machin",
      adress: "adress",
      region: "region",
      skill: "skill",
      hourCount: "hourCount",
      selected: "key1"
		}
  }

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  
  static navigationOptions = {
      header: null,
  };
    
  render() {
    return (
      <Container>
        <Content>
          <Image
            style={{height: 250, flex:1}}
            source={{uri: 'https://e3.365dm.com/18/04/1096x616/skynews-kim-jong-un-north-korea_4278358.jpg'}}
          />
          <Text>Personnal Info Page</Text>
          <Text>Username :{this.state.username}</Text>
          <Text>Adress : {this.state.adress}</Text>
          <Text>Region : {this.state.region}</Text>
          <Text>SKILL (Selected in the list) {this.state.skill}</Text>
          <Form>
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="" value="key0" />
              <Picker.Item label="" value="key1" />
              <Picker.Item label="" value="key2" />
              <Picker.Item label="" value="key3" />
              <Picker.Item label="" value="key4" />ù
            </Picker>
          </Form>
          <Text>Total Hour Counter : {this.state.hourCount}</Text>
        </Content>
      </Container>
    );
  }
}


 
       