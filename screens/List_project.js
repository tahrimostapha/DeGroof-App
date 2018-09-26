import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';
const cards = [
  {
    field: 'Accounting',
    name: 'Xcompta project from ABC Agency ',
    city: 'Evere',
    type: 'Coaching',
    image: require('../compta.png'),
  },
     {
    field: 'Ecology',
    name: 'Xfarm project from PigAvenue SPRL ',
    city: 'Waterloo',
    type: 'Mentoring',
    image: require('../fermier.jpg'),
  },
      {
    field: 'Management',
    name: 'Xgestion project from SNCB',
    city: 'Ixelles',
    type: 'Coaching',      
    image: require('../gestion.jpg'),
  },
      {
    field: 'Education',
    name: 'JeanLuc project from JeanLuc Farming',
    city: 'Habergy',
    type: 'Mentoring',      
    image: require('../champs.png'),
  },
];
export default class DeckSwiperAdvancedExample extends Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (  
          <Container>
            
            <Header />
            <View>
              <DeckSwiper
                dataSource={cards}
                renderItem={item =>
                  <Card style={{ elevation: 3 }}>
                                <Text style={{ 
                                 textAlign: 'center', 
                                 marginBottom: 20 ,
                                 marginTop:15 ,
                                 fontWeight : 'bold',
                                 fontSize: 26 }} 
                        > Projets Disponibles </Text>

                    <CardItem>
            
                      <Left>
                        <Thumbnail source={item.image} />
                        <Body>
                          
                          <Text style= {{ fontWeight : 'bold' }} > {item.field}</Text>
                          
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <Image style={{ height: 300, flex: 1 }} source={item.image} />
                    </CardItem>
                    <CardItem>
                      <Icon name="home" style={{ color: '#4fbc83' }} />
                      <Text>{item.name}</Text>
                    </CardItem>
                    <CardItem>
                      <Icon name="planet" style={{ color: '#4fbc83' }} />
                      <Text>{item.city}</Text>
                    </CardItem>
                    <CardItem>
                      <Icon name="ring" style={{ color: '#4fbc83' }} />
                      <Text>{item.type}</Text>
                    </CardItem>
                        <Button transparent success block>
                        <Text style={{textAlign: 'center'}} >Click for informations </Text></Button>
                  </Card>
                }
              />
            </View>
          </Container>
        );
      }
    }
       