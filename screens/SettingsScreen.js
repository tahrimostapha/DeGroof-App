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
                          selected2: "key5",
                          selected3: "key0",  
                            }
                      }


  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }

  onApply = () => {
    this.props.navigation.navigate('ListExamples');
}

  static navigationOptions = {
      header: null,
  };

                      render() {
                        return (
                            
                            
                          <Container style={{justifyContent: "center",
                          alignItems: "center" }}>
                            
                            <ImageBackground source={require('../fondperso.png')} style={{width: '100%', height: 300, alignItems: 'center'}}>
                            
                            <Text style={{
                                marginTop: 65, 
                                 color: '#4fbc83',
                                 fontWeight : 'bold',
                                 fontSize: 26,
                                 alignItems: 'center',
                                 fontFamily: 'Palatino'}} > Personal Info Page
                            </Text>
                         
                              <Image
                                style={{
                                    width:160, 
                                    resizeMode: 'contain',
                                    marginTop: -180,
                                    marginBottom: -160,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }} 
                                    source={require('../bob_copy.png')} 
                              />
                            </ImageBackground>
                              <Content>
                                <Text>{this.state.image}</Text>
                                <Text style={{marginBottom: 10, fontFamily: 'Palatino'}}>•  Username : {this.state.username}</Text>
                                <Text style={{marginBottom: 10, fontFamily: 'Palatino'}}>•  Adress  : {this.state.adress}</Text>
                                <Text style={{marginBottom: 20, fontFamily: 'Palatino'}}>•  Region : {this.state.region}</Text>
                                <Text style={{marginBottom: 15, fontFamily: 'Palatino'}}>SKILL (Select in the list): {this.state.skill}</Text>
                                <Form>
                                  <Picker
                                    mode="dropdown"
                                    iosHeader="Select Your Skills"
                                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#9cd3ab", fontSize: 25 , textAlign: "right" }} />}
                                    
                                    selectedValue={this.state.selected1}
                                    onValueChange={this.onValueChange.bind(this)}
                                  >
                                    <Picker.Item label=" Management" value="key0" />
                                    <Picker.Item label=" Financial Consulting" value="key1" />
                                    <Picker.Item label=" Market Survey" value="key2" />
                                    <Picker.Item label=" uyRGPD Consulting" value="key3" />
                                    <Picker.Item label=" Tax Accountant " value="key4" />
                                    <Picker.Item label=" English " value="key5" /> 
                                    <Picker.Item label=" Deutsh " value="key6" /> 
                                    <Picker.Item label=" Communication " value="key7" /> 
                                    <Picker.Item label=" Hr " value="key8" /> 
                                    <Picker.Item label=" Psychology " value="key9" /> 
                                    <Picker.Item label=" Mecanical sciences" value="key10" /> 
                                    <Picker.Item label=" Electricity " value="key11" /> 
                                    <Picker.Item label=" Auto " value="key12" /> 
                                    <Picker.Item label=" Medical sciences " value="key13" /> 
                                    <Picker.Item label=" Chemical sciences " value="key14" /> 
                                   
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
                                    <Picker.Item label=" English " value="key5" /> 
                                    <Picker.Item label=" Deutsh " value="key6" /> 
                                    <Picker.Item label=" Communication " value="key7" /> 
                                    <Picker.Item label=" Hr " value="key8" /> 
                                    <Picker.Item label=" Psychology " value="key9" /> 
                                    <Picker.Item label=" Mecanical sciences" value="key10" /> 
                                    <Picker.Item label=" Electricity " value="key11" /> 
                                    <Picker.Item label=" Auto " value="key12" /> 
                                    <Picker.Item label=" Medical sciences " value="key13" /> 
                                    <Picker.Item label=" Chemical sciences " value="key14" />     
                                        
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
                                    <Picker.Item label=" English " value="key5" /> 
                                    <Picker.Item label=" Deutsh " value="key6" /> 
                                    <Picker.Item label=" Communication " value="key7" /> 
                                    <Picker.Item label=" Hr " value="key8" /> 
                                    <Picker.Item label=" Psychology " value="key9" /> 
                                    <Picker.Item label=" Mecanical sciences" value="key10" /> 
                                    <Picker.Item label=" Electricity " value="key11" /> 
                                    <Picker.Item label=" Auto " value="key12" /> 
                                    <Picker.Item label=" Medical sciences " value="key13" /> 
                                    <Picker.Item label=" Chemical sciences " value="key14" />  
                                        
                                  </Picker>
                                </Form>
                              </Content>
                                <Text style={{marginBottom: 10, fontWeight: "bold", fontSize: 25, color: '#9cd3ab', fontFamily: 'Palatino'}}>Total Hours Done: {this.state.hourCountDone} on {this.state.hourCountToDo}</Text>
                                <Button transparent block onPress={()=>this.onApply()}>
                                        <Text style={{textAlign: 'center', color: '#01524b' }} >Click here for All Your Project </Text></Button>
                               
                                 
                          </Container>
                        );
                      }
                    }

  