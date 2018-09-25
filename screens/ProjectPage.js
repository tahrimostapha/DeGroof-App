import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';
export default class ListAvatarExample extends Component {
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
				    <Thumbnail source={{ uri: 'https://pmcdeadline2.files.wordpress.com/2017/09/ap_17272739120053.jpg?w=446&h=299&crop=1' }} />
				  </Left>
				  <Body>
				    <Text>Name</Text>
				    <Text note>This is the name</Text>
				  </Body>
				</ListItem>
				<ListItem avatar>
				  <Left>
				    <Thumbnail source={{ uri: 'https://pmcdeadline2.files.wordpress.com/2017/09/ap_17272739120053.jpg?w=446&h=299&crop=1' }} />
				  </Left>
				  <Body>
				    <Text>Region</Text>
				    <Text note>This is the region</Text>
				  </Body>
				</ListItem>
				<ListItem avatar>
				  <Left>
				    <Thumbnail source={{ uri: 'https://pmcdeadline2.files.wordpress.com/2017/09/ap_17272739120053.jpg?w=446&h=299&crop=1' }} />
				  </Left>
				  <Body>
				    <Text>Field</Text>
				    <Text note>Education, social</Text>
				  </Body>
				</ListItem>
				<ListItem avatar>
				  <Left>
				    <Thumbnail source={{ uri: 'https://pmcdeadline2.files.wordpress.com/2017/09/ap_17272739120053.jpg?w=446&h=299&crop=1' }} />
				  </Left>
				  <Body>
				    <Text>Region</Text>
				    <Text note>This is the region</Text>
				  </Body>
				</ListItem>
			</List>
			<Button rounded>
	           <Text>Primary</Text>
	        </Button>
        </Content>
      </Container>
    );
  }
}