import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';
export default class ListAvatarExample extends Component {
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
			<List>
				<ListItem avatar>
				  <Left>
				    <Thumbnail source={{ uri: 'https://static.thenounproject.com/png/101346-200.png' }} />
				  </Left>
				  <Body>
				    <Text>Name</Text>
				    <Text note>JeanLuc Farming</Text>
				  </Body>
				</ListItem>
				<ListItem avatar>
				  <Left>
				    <Thumbnail source={{ uri: 'https://cdn0.iconfinder.com/data/icons/seo-and-marketing/32/local-places-512.png' }} />
				  </Left>
				  <Body>
				    <Text>Region</Text>
				    <Text note>Habergy, 6782 Hainaut</Text>
				  </Body>
				</ListItem>
				<ListItem avatar>
				  <Left>
				    <Thumbnail source={{ uri: 'https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/input-field-search-field-outline-512.png' }} />
				  </Left>
				  <Body>
				    <Text>Field</Text>
				    <Text note>Education & Farming</Text>
				  </Body>
				</ListItem>
				<ListItem avatar>
				  <Left>
				    <Thumbnail source={{ uri: 'https://cdn3.iconfinder.com/data/icons/essentials-vol-1-1/512/Type-512.png' }} />
				  </Left>
				  <Body>
				    <Text>Type</Text>
				    <Text note>Coaching</Text>
				  </Body>
				</ListItem>
				<ListItem avatar>
				  <Left>
				    <Thumbnail source={{ uri: 'https://vignette.wikia.nocookie.net/diamondhuntonline6455/images/b/b3/Skill-icon.png/revision/latest?cb=20170509083140' }} />
				  </Left>
				  <Body>
				    <Text>Skill Needed</Text>
				    <Text note>Planting, Vrooming and Tractoring</Text>
				  </Body>
				</ListItem>
				<ListItem avatar>
				  <Left>
				    <Thumbnail source={{ uri: 'https://cdn1.iconfinder.com/data/icons/material-device/20/access-time-512.png' }} />
				  </Left>
				  <Body>
				    <Text>Hours Needed</Text>
				    <Text note>4 Hours</Text>
				  </Body>
				</ListItem>
			</List>
			<Text style={{textTransform: 'uppercase', fontWeight : 'bold', marginTop : 35}}>Mission Description</Text>
			<Text note>Même si on se ment, ce n'est pas un simple sport car on est tous capables de donner des informations à chacun car l'aboutissement de l'instinct, c'est l'amour ! Donc on n'est jamais seul spirituellement !</Text>
			<Button full primary>
	           <Text>Apply for this mission</Text>
	        </Button>
        </Content>
      </Container>
    );
  }
}