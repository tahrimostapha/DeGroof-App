import React, { Component } from 'react';
import { Image, StyleSheet, ImageBackground } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button, DatePicker } from 'native-base';
import DropdownAlert from 'react-native-dropdownalert';
export default class MissionPage extends Component {
  static navigationOptions = {
      header: null,
  };

constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
	}
	
	itemAction(item) {
		switch (item.type) {
		case 'close':
				this.closeAction();
				break;
		default:
				const random = Math.floor(Math.random() * 1000 + 1);
				const title = item.type + ' #' + random;
				this.dropdown.alertWithType(item.type, title, item.message);
		}
}

	componentDidMount(){
		this.itemAction({type : "success",message : "Votre candidature a été enregistrée.", title : "Participation validées !"});
	}

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <Container>
        <Content>
        
	        <Image
              style={{height: 250, flex:1}}
              source={require('../champs.png')}
            />
            <ImageBackground source={require('../cover_grey.png')} style={{width: '100%', height: '100%'}}>
            <Text style={styles.TitleDescription}>Your Project</Text>
			<List>
				<ListItem avatar>
				  <Left>
				    <Thumbnail source={{ uri: 'https://static.thenounproject.com/png/101346-200.png' }} />
				  </Left>
				  <Body>
				    <Text style={styles.ListTitle}>Name</Text>
				    <Text note>JeanLuc project from JeanLuc Farming</Text>
				  </Body>
				</ListItem>
				<ListItem avatar>
				  <Left>
				    <Thumbnail source={{ uri: 'https://png.pngtree.com/svg/20160304/region_647102.png' }} />
				  </Left>
				  <Body>
				    <Text style={styles.ListTitle}>Adress</Text>
				    <Text note>Rue du petit seau, 45, Habergy, 6782  Belgique</Text>
				  </Body>
				</ListItem>
				<ListItem avatar>
				  <Left>
				    <Thumbnail source={{ uri: 'https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/input-field-search-field-outline-512.png' }} />
				  </Left>
				  <Body>
				    <Text style={styles.ListTitle}>Field</Text>
				    <Text note>Education</Text>
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
				    <Text style={styles.ListTitle}>Skills Needed</Text>
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
				<ListItem avatar>
				  <Left>
				    <Thumbnail source={{ uri: 'https://png.icons8.com/metro/1600/phone.png' }} />
				  </Left>
				  <Body>
				    <Text style={styles.ListTitle}>Phone</Text>
				    <Text note>0465/34.63.84</Text>
				  </Body>
				</ListItem>
                	<ListItem avatar>
				  <Left>
				    <Thumbnail source={{ uri: 'https://image.flaticon.com/icons/png/512/42/42321.png' }} />
				  </Left>
				  <Body>
				    <Text style={styles.ListTitle}>Date</Text>
				    <DatePicker
                        defaultDate={new Date(2018, 4, 4)}
                        minimumDate={new Date(2018, 1, 1)}
                        maximumDate={new Date(2018, 12, 31)}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Select date"
                        textStyle={{ color: "green" }}
                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                        onDateChange={this.setDate}
            />
            <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text>
				  </Body>
				</ListItem>
			</List>
			<Text style={styles.TitleDescription}>Your Mission Description</Text>
			<Text note style={styles.TextDescription}>Même si on se ment, ce n'est pas un simple sport car on est tous capables de donner des informations à chacun car l'aboutissement de l'instinct, c'est l'amour ! Donc on n'est jamais seul spirituellement !</Text>
            
    
            
            </ImageBackground>
        </Content>
				<DropdownAlert
          ref={ref => this.dropdown = ref}
          showCancel={true}
        //   onClose={data => this.handleClose(data)}
        //   onCancel={data => this.handleCancel(data)}
          imageSrc={'https://facebook.github.io/react-native/docs/assets/favicon.png'}
        />
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
    fontFamily: 'Palatino',  
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