import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { autentication } from '../../Store/Servicios/Firebase';

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
        <Button
          title="Salir"
          onPress={()=>{
            autentication.signOut()
              .then(()=>{
                alert("Te esperamos pronto")
              })
              .catch((error)=>{
                alert(error);
              })
          }} 
        />
      </View>
    )
  }
}