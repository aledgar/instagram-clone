import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Comentarios extends Component {
  static navigationOptions = {
    tabBarVisible:false,
  };
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text> Comentarios </Text>
        <Button
          title="Perfil"
          onPress={()=>{navigation.navigate('Autor')}}
        />    
      </View>
    )
  }
}