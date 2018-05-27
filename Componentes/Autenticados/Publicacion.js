import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Publicacion extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text> Publicacion </Text>
        <Button
          title="Comentarios"
          onPress={()=>{navigation.navigate('Comentarios')}}
        />
      </View>
    )
  }
}