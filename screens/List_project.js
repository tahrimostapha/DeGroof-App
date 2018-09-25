import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';
const cards = [
  {
    text: 'Projet Compta',
    name: 'Xcompta Fondation',
    city: 'Evere',
    image: require('../compta.png'),
  },
     {
    text: 'Projet Eco',
    name: 'Xfarm Fondation',
    city: 'Waterloo',
    image: require('../fermier.jpg'),
  },
      {
    text: 'Projet Gestion',
    name: 'Xgestion Fondation',
    city: 'Ixelles',
    image: require('../gestion.jpg'),
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
                                 marginBottom: 25 ,
                                 marginTop:15 ,
                                 fontWeight : 'bold',
                                 fontSize: 26 }} 
                        > Projets Disponibles </Text>

                    <CardItem>
            
                      <Left>
                        <Thumbnail source={item.image} />
                        <Body>
                          
                          <Text style= {{ fontWeight : 'bold' }} > {item.text}</Text>
                          
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
       