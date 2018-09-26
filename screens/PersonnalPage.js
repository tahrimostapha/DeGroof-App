import React from 'react';
import {View,Text, Image} from 'react-native';
import { Container, Content } from 'native-base';

export default class PersonnalPage extends React.Component{
	static navigationOptions = {
	  header: null,
	};
	render(){
		return(
			 <Container>
				<Content>
					<Image
			          style={{width: 66, height: 58}}
			          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
			        />
					<Text>Personnal Info Page</Text>
					
				</Content>
			 </Container>
			)
	}
}