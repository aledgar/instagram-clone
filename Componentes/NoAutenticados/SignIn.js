import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import SignInForm from './Formas/SignInForm' 

class SignIn extends Component {
  inicioDeSesion = (values) =>{
    console.log('Desde login ',values);
    this.props.login(values);
  } 
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <SignInForm login={this.inicioDeSesion}/>  
        <Button 
            title="SignUp"
            onPress={()=>{navigation.navigate('SignUp')}}
        />
      </View>
    )  
  }
}     

const mapStateToProps = state =>{
  return {
    numero: state.reducerPrueba
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    login: (values) =>{
      dispatch({type:'LOGIN', datos:values})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

//Estilos
const styles = StyleSheet.create({
  container:{ 
    flex:1,
    justifyContent:'center',
    backgroundColor: '#fff',
    paddingHorizontal:16 
  }, 
});  