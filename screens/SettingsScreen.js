import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ImageBackground, Image } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item ,Input, Form, Picker } from 'native-base';

export default class SettingsScreen extends Component {
  constructor(props){
		super(props);
		this.state = {
			username: "Martin",
      adress: "Avenue de la Couronne n°5, Ixelles",
      region: "Bruxelles Capital",
      hourCount: "15h",
      selected: "key0"
		}
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  
  static navigationOptions = {
      header: null,
  };
    
  render() {
    return (
      <Container style={styles.container}>
          <Image
            style={{height: 250, flex:1}}
            source={{uri: 'https://e3.365dm.com/18/04/1096x616/skynews-kim-jong-un-north-korea_4278358.jpg'}}
          />
          <Content style={styles.content}>
            <Text>Personnal Info Page</Text>
            <Text>Username : {this.state.username}</Text>
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
                <Picker.Item label="Management" value="key0" />
                <Picker.Item label="Financial Consulting" value="key1" />
                <Picker.Item label="Market Survey" value="key2" />
                <Picker.Item label="RGPD Consulting" value="key3" />
                <Picker.Item label="Tax Accountant " value="key4" />
              </Picker>
            </Form>
            <Text>Total Hour on app : {this.state.hourCount}</Text>
          </Content>
      </Container>
    );
  }
}

  const styles=StyleSheet.create({
    container: {
      paddingLeft: 5,
      paddingRight: 15,
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      paddingLeft: 15,
    },
  })
 