import React from 'react';
import {View,Text} from 'react-native';
import { Container, Content, Image } from 'native-base';

class PersonnalScreen extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: "machin",
			lastname: "test"
		}
	}
	render(){
		return(
			 <Container>
				<Content>
					<Image
						style={{height: 250, flex:1}}
              			source={{uri: 'https://e3.365dm.com/18/04/1096x616/skynews-kim-jong-un-north-korea_4278358.jpg'}}
					/>
					<Text>Personnal Info Page</Text>
					<Text>{this.state.username}</Text>
				</Content>
			 </Container>
			)
	}
}
export default PersonnalScreen;