import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Search extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text > Search </Text>
        <Button
          title="Publicación"
          onPress={()=>{navigation.navigate('Publicacion')}}
        />
      </View>
    )
  }
}