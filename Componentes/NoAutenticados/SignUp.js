import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import {connect} from 'react-redux';
import SignUpForm from './Formas/SignUpForm';

class SignUp extends Component {
  registroDeUsuario = (values) =>{
    console.log('from the new function',values);
    this.props.registry(values);
  }
  render() { 
    console.log(this.props.numero)
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
      <SignUpForm registro={this.registroDeUsuario} />
        <Button
          title='SignIn' 
          onPress={()=>{navigation.goBack()}}  
        />  
      </View> 
    )
  }    
} 

const mapStateToProps = state => {
  return {
    numero: state.reducerPrueba   
  }
} 

const mapDispatchToProps = dispatch =>{
  return {
    registry: (values)=>{
      dispatch({type:'REGISTRY',datos:values})  
    }
  }
}

const styles = StyleSheet.create({
  container:{ 
    flex:1, 
    // alignItems:'center', 
    justifyContent:'center',
    backgroundColor: '#fff',
    paddingHorizontal:16
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);