import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Profile extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Profile</Text>
        <Button
          title="Publicacion"
          onPress={()=>{navigation.navigate('Publicacion')}}
        />
      </View>
    )
  }
}