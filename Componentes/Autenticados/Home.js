import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Home extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text> Home </Text>
        <Button
          title="Autor"
          onPress={()=>{navigation.navigate('Autor')}}
        />
      </View>
    )
  }
}