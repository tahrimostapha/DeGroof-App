import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ImageBackground, Image } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item ,Input, Form, Picker } from 'native-base';

export default class SettingsScreen extends Component {
  constructor(props){
		super(props);
		this.state = {
                          
                          username: "Martin Matin",
                          adress: "Avenue de la Couronne n°5, Ixelles",
                          project: "JeanLuc project",
                          region: "Bruxelles Capital",
                          hourCountToDo: "5 ",
                          hourCountDone:  "3",  
                          selected1: "key2",
                          selected2: "key1",
                          selected3: "key0",  
                            }
                      }


  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }

  static navigationOptions = {
      header: null,
  };

  render() {
    return (
      <Container style={{justifyContent: "center",alignItems: "center" }}>
        <ImageBackground source={require('../fondperso.png')} style={{width: '100%', alignItems: 'center'}}>
        <Text style={{
            marginTop: 80, 
            color: '#4fbc83',
            fontWeight : 'bold',
            fontSize: 26,
            alignItems: 'center',
            fontFamily: 'Palatino'}} > Personnal Info Page
        </Text>
          <Image
            style={{
                width:160, 
                resizeMode: 'contain',
                marginTop: -180,
                marginBottom: -200,
                justifyContent: "center",
                alignItems: "center"
            }} 
                source={require('../bob_copy.png')} 
          />
        </ImageBackground>
          <Content>
            <Text>{this.state.image}</Text>
            <Text style={{marginBottom: 10}}>•  Username : {this.state.username}</Text>
            <Text style={{marginBottom: 10}}>•  Adress  : {this.state.adress}</Text>
            <Text style={{marginBottom: 20}}>•  Region : {this.state.region}</Text>
            <Text style={{marginBottom: 10}}>SKILL (Select in the list): {this.state.skill}</Text>
            <Form>
              <Picker
                mode="dropdown"
                iosHeader="Select Your Skills"
                iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#9cd3ab", fontSize: 25 , textAlign: "right" }} />}
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Management" value="key0" />
                <Picker.Item label="Financial Consulting" value="key1" />
                <Picker.Item label="Market Survey" value="key2" />
                <Picker.Item label="RGPD Consulting" value="key3" />
                <Picker.Item label="Tax Accountant " value="key4" />
                <Picker.Item label=" " value="key5" />     
              </Picker>
            </Form>
              <Form>
              <Picker
                mode="dropdown"
                iosHeader="Select Your Skills"
                iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#9cd3ab", fontSize: 25 }} />}
                style={{ width: undefined }}
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Management" value="key0" />
                <Picker.Item label="Financial Consulting" value="key1" />
                <Picker.Item label="Market Survey" value="key2" />
                <Picker.Item label="RGPD Consulting" value="key3" />
                <Picker.Item label="Tax Accountant " value="key4" />
                <Picker.Item label=" " value="key5" />    
              </Picker>
            </Form>
              <Form>
              <Picker
                mode="dropdown"
                iosHeader="Select Your Skills"
                iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#9cd3ab", fontSize: 25 }} />}
                style={{ width: undefined }}
                selectedValue={this.state.selected3}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Management" value="key0" />
                <Picker.Item label="Financial Consulting" value="key1" />
                <Picker.Item label="Market Survey" value="key2" />
                <Picker.Item label="RGPD Consulting" value="key3" />
                <Picker.Item label="Tax Accountant " value="key4" />
                <Picker.Item label=" " value="key5" /> 
              </Picker>
            </Form>
          </Content>
          <Text style={{marginBottom: 50, fontWeight: "bold", fontSize: 25, color: '#9cd3ab', fontFamily: 'Palatino'}}>Total Hours : {this.state.hourCount}</Text>
      </Container>
    );
  }
}
