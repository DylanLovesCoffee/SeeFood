import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class RecipeScreen extends Component {

  render() {
      let instructionsString = this.props.navigation.state.params.instructions.replace(/\s+/g,' ').trim();
      let instructionsArray = instructionsString.split('. ')
    return(
      <ScrollView>
        {instructionsArray.map((line) => return(<Text>{line}</Text>))}
      </ScrollView>
    )
  }
}
