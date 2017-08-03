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

  constructor() {
    super()
    this.state = {
      instructionsArray: ["recipe","instructions"]
    }
  }

  componentDidMount() {
    if (this.props.navigation.state.params.instructions != undefined) {
      let instructionsString = this.props.navigation.state.params.instructions.replace(/\s+/g,' ').trim();
      let stringArray = instructionsString.split('. ')
      this.setState({
        instructionsArray: stringArray
      })
    }
  }

  render() {
    return(
      <ScrollView>
        {this.state.instructionsArray.map(function(line) {
          return<Text>{line + ". \n"}</Text>
        })}
    </ScrollView>
    )
  }
}
