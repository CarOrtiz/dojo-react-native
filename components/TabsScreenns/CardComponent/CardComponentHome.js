import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

class CardComponentHome extends Component {

    render() {

    const data ={
        '1': require('../../../img/1.jpg'),
        '2': require('../../../img/2.jpg'),
        '3': require('../../../img/3.jpg'),

    }

    return (
      <Container>
          <Content>
              <Card>
              <CardItem>
                  <Left>
                      <Thumbnail large source={require('../../../img/4.jpg')} />
                      <Body>
                          <Text>David_Caballero</Text>
                          <Text note>17 Oct, 2018</Text>
                      </Body>
                  </Left>
              </CardItem>
              <CardItem cardBody>
                  <Image 
                    source ={data[this.props.imageSource]} 
                    style={{width: null, height: 200, flex: 1}}
                   />
              </CardItem>
              <CardItem style={{height:40}}>
                  <Left>
                      <Button transparent>
                        <Icon name='md-heart-outline' style={{color: 'black'}} />
                      </Button>
                      <Button transparent>
                        <Icon name='md-chatbubbles' style={{color: 'black'}} />
                      </Button>
                      <Button transparent>
                        <Icon name='md-send' style={{color: 'black'}} />
                      </Button>
                  </Left>
              </CardItem>
              <CardItem style ={{height:20}}>
                  <Text>{this.props.likes}</Text>
              </CardItem>
              <CardItem>
                  <Body>
                  <Text>
                      <Text style={{fontWeight:"900"}}>
                        David_Caballero
                      </Text>
                  “No todo lo que brilla es oro, a veces puede ser un diamante” – David_Caballero
                  </Text>
                  </Body>
              </CardItem>
              </Card>
          </Content>
      </Container>
    );
  }
}

export default CardComponentHome;
