import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'
import { Field, reduxForm } from 'redux-form';
import {autentication} from '../../../Store/Servicios/Firebase';
const fieldNombre = (props) => {
  
  return (
    <View style={styles.inputStyle}>
        <TextInput 
          placeholder={props.ph} 
          onChangeText={props.input.onChange}
          value={props.input.value}
          keyboardType={props.input.name === 'correo' ? 'email-address':'default'}
          autoCapitalize="none"
          secureTextEntry={!!(props.input.name === 'password' || props.input.name==='confirm')}
          onBlur={props.input.onBlur}
          style={{borderBottomColor:1, borderColor:'blue', fontSize:18}} 
        />
        {props.meta.touched && props.meta.error && <Text style={styles.message}>{props.meta.error}</Text>}
      </View>
  );
}; 
 
  const validate = (values) =>{
    const errors = {};
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!values.nombre){
      errors.nombre = 'Su nombre es requerido.';
    }else if(values.nombre.length<5){
      errors.nombre = 'a longitud es de al menos 5 caracteres';
  }else if(values.nombre.length>10){
    errors.nombre = 'La longitud es de máximo 10 caracteres';
  }

  if(!values.correo){
    errors.correo = 'El correo es requerido.';
  }else if(!re.test(values.correo)){
    errors.correo = 'Lo que se ingreso no es un correo.';
  }

  if(!values.password){
    errors.password = 'Se require una contraseña';
  }else if(values.password.length<5){
    errors.password = 'La longitud es de al menos 5 caracteres';
  }else if(values.password.length>15){
    errors.password = 'La longitud es de máximo 15 caracteres';
  }

  if(!values.confirm){
    errors.confirm = 'Se require una contraseña';
  }else if(values.password !== values.confirm){
    errors.confirm = 'Las contraseñas deben coincidir';
  }
  return errors;
}

const SignUpForm = (props) => {
  // console.log(props)     
    return (
      <View style={styles.inputStyle}> 
      <View style={{borderBottomWidth:1, borderBottomColor:'blue',marginBottom:16}}>
        <Text style={{color:'blue',marginBottom:10,fontSize:20,fontWeight:'bold'}}> SignUp </Text>
      </View> 
        <Field name="nombre" component={fieldNombre} ph="Nombre:"/>
        <Field name="correo" component={fieldNombre} ph="Email@Email.com"/>
        <Field name="password" component={fieldNombre} ph="Password:"/>
        <Field name="confirm" component={fieldNombre} ph="Confirm password:"/>
        <Button 
          title='Registrar'
          onPress={props.handleSubmit(props.registro)}
        />  
      </View>
    );
};

const styles = StyleSheet.create({
  inputStyle:{ 
    marginBottom:16
  },
  message:{
    color:'red'
  }
})

export default reduxForm({form: 'SignUpForm', validate})(SignUpForm);
   