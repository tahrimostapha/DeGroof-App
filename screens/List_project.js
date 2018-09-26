import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';

const cards = [
  {
    field: 'Accounting',
    name: 'Xcompta project from ABC Agency ',
    region: 'Evere',
    type: 'Coaching',
    image_type: require('../compta.png'),
    image: require('../compta2.jpg'),
    
  },
      {
    field: 'Management',
    name: 'Xgestion project from SNCB',
    region: 'Ixelles',
    type: 'Coaching',      
    image_type: require('../Management2.jpg'),
    image: require('../sncb.jpg'),
  },
      {
    field: 'Education',
    name: 'JeanLuc project from JeanLuc Farming',
    region: 'Habergy',
    type: 'Mentoring',    
    image_type: require('../education2.jpg'),
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
            
            <View>
              <DeckSwiper
                dataSource={cards}
                renderItem={item =>
                  <Card style={{ elevation: 3 }}>
                                <Text style={{ 
                                 textAlign: 'center', 
                                 color: '#4fbc83' ,
                                 marginTop:60 ,
                                 fontWeight : 'bold',
                                 fontSize: 26,
                                 fontFamily: 'Palatino'}} 
                        > Available Projects </Text>

                    <CardItem>
            
                      <Left>
                        <Thumbnail source={item.image_type} />
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
                      <Text>{item.region}</Text>
                    </CardItem>
                    <CardItem>
                      <Icon name="home" style={{ color: '#4fbc83' }} />
                      <Text>{item.type}</Text>
                    </CardItem>
                        <Button transparent block>
                        <Text style={{textAlign: 'center', color: '#9cd3ab' }} >Click for informations </Text></Button>
                  </Card>
                }
              />
            </View>
          </Container>
        );
      }
    }
       