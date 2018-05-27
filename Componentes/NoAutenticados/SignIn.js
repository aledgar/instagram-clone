import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import SignInForm from './Formas/SignInForm' 

export default class SignIn extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <SignInForm />
        <Button 
            title="SignUp"
            onPress={()=>{navigation.navigate('SignUp')}}
        />
      </View>
    )  
  }
}     

const styles = StyleSheet.create({
  container:{ 
    flex:1,
    justifyContent:'center',
    backgroundColor: '#fff',
    paddingHorizontal:16 
  }, 
});  