import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, ListItem, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Switch, List } from 'native-base';
export default class CardShowcaseExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://via.placeholder.com/200x320'}} style={{height: 200, width: 320, flex: 1}}/>
                <Text>
                  Iamque lituis cladium concrepantibus internarum non celate ut antea turbidum saeviebat ingenium a veri consideratione detortum et nullo inpositorum vel conpositorum fidem sollemniter inquirente nec discernente a societate noxiorum insontes velut exturbatum e iudiciis fas omne discessit
                </Text>
              </Body>
            </CardItem>
            <CardItem>
            	<ListItem icon>
		            <Left>
		              <Button style={{ backgroundColor: "#FF9501" }}>
		                <Icon active name="plane" />
		              </Button>
		            </Left>
		            <Body>
		              <Text>Airplane Mode</Text>
		            </Body>
		        </ListItem>
            </CardItem>
            <CardItem>
              <Left>
                <Button primary textStyle={{color: '#87838B'}}>
                  <Text>APPLY for this mission</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}