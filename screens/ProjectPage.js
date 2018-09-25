import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';
export default class ProjectPage extends Component {
  static navigationOptions = {
      header: null,
  };
  render() {
    return (
      <Container>
        <Content>
	        <Image
              style={{height: 250, flex:1}}
              source={{uri: 'https://robohub.org/wp-content/uploads/2016/05/DeepfieldRobotics.png'}}
            />
            <Text style={styles.TitleDescription}>Project Description</Text>
			<List>
				<ListItem avatar>
				  <Left>
				    <Thumbnail source={{ uri: 'https://static.thenounproject.com/png/101346-200.png' }} />
				  </Left>
				  <Body>
				    <Text style={styles.ListTitle}>Name</Text>
				    <Text note>JeanLuc Farming</Text>
				  </Body>
				</ListItem>
				<ListItem avatar>
				  <Left>
				    <Thumbnail source={{ uri: 'https://png.pngtree.com/svg/20160304/region_647102.png' }} />
				  </Left>
				  <Body>
				    <Text style={styles.ListTitle}>Region</Text>
				    <Text note>Habergy, 6782 Hainaut</Text>
				  </Body>
				</ListItem>
				<ListItem avatar>
				  <Left>
				    <Thumbnail source={{ uri: 'https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/input-field-search-field-outline-512.png' }} />
				  </Left>
				  <Body>
				    <Text style={styles.ListTitle}>Field</Text>
				    <Text note>Education & Farming</Text>
				  </Body>
				</ListItem>
				<ListItem avatar>
				  <Left>
				    <Thumbnail source={{ uri: 'https://cdn3.iconfinder.com/data/icons/essentials-vol-1-1/512/Type-512.png' }} />
				  </Left>
				  <Body>
				    <Text style={styles.ListTitle}>Type</Text>
				    <Text note>Coaching</Text>
				  </Body>
				</ListItem>
				<ListItem avatar>
				  <Left>
				    <Thumbnail source={{ uri: 'https://static.thenounproject.com/png/369287-200.png' }} />
				  </Left>
				  <Body>
				    <Text style={styles.ListTitle}>Skill Needed</Text>
				    <Text note>Planting, Vrooming and Tractoring</Text>
				  </Body>
				</ListItem>
				<ListItem avatar>
				  <Left>
				    <Thumbnail source={{ uri: 'https://cdn1.iconfinder.com/data/icons/material-device/20/access-time-512.png' }} />
				  </Left>
				  <Body>
				    <Text style={styles.ListTitle}>Hours Needed</Text>
				    <Text note>4 Hours</Text>
				  </Body>
				</ListItem>
			</List>
			<Text style={styles.TitleDescription}>Mission Description</Text>
			<Text note style={styles.TextDescription}>Même si on se ment, ce n'est pas un simple sport car on est tous capables de donner des informations à chacun car l'aboutissement de l'instinct, c'est l'amour ! Donc on n'est jamais seul spirituellement !</Text>
			<Button full style={styles.ButtonApply}>
	           <Text>Apply for this mission</Text>
	        </Button>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  TitleDescription: {
    fontWeight : 'bold', 
    marginTop : 28, 
    marginBottom : 10,
    marginLeft: 20,
    fontSize: 20,
  },
  ProjectDescription: {
    fontWeight : 'bold', 
    marginTop : 12, 
    marginBottom : 10,
    marginLeft: 20,
    fontSize: 20,
  },
  TextDescription : {
  	marginHorizontal : 20,
  },
  ButtonApply: {
  	height : 80,
  	marginVertical: 30,
  	backgroundColor: '#00524B',
  },
  ListTitle: {
  	color: '#4FBC84',
  },
});