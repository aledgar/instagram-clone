import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Follow extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text> Follow </Text>
        <Button
          title="Perfil"
          onPress={()=>{navigation.navigate("Perfil")}}
        />
      </View>
    )
  }
}