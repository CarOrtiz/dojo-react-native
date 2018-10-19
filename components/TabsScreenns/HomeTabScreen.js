import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import CardComponentHome from './CardComponent/CardComponentHome';
import { Container, Content } from 'native-base';

export default class HomeTabScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <CardComponentHome imageSource='1' likes='2k' />
          <CardComponentHome imageSource='2' likes='4k' />
          <CardComponentHome imageSource='3' likes='5k' />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white' 
  }
});
