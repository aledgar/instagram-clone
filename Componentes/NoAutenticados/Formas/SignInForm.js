import React, { Component } from 'react'
import { Text, View, Button, TextInput, StyleSheet } from 'react-native'
import { Field, reduxForm } from 'redux-form';

const validate = (values) =>{
    const errors = {};
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!values.correo){ 
        errors.correo = 'Es necesario el correo para iniciar sesión';
     
    }else if(!re.test(values.correo)){
        errors.correo = 'Lo que ingreso no es un correo';
    }

    if(!values.password){
        errors.password='Ingrese una contraseña'
    }

    return errors;
}

const fieldNombre = (props) =>{
    return(
        <View style={styles.inputStyle}> 
            <TextInput
                placeholder={props.ph}
                onChangeText={props.input.onChange}
                value={props.input.value}
                keyboardType={props.input.name === 'correo' ? 'email-address':'default'}
                autoCapitalize="none"
                secureTextEntry={!!(props.input.name==='password')}  
                onBlur={props.input.onBlur}
                style={{borderBottomColor:1, borderColor:'blue', fontSize:18}} 
            />
            {props.meta.touched && props.meta.error && <Text style={styles.message}>{props.meta.error}</Text>} 
        </View>
    )
}

const SignInForm = (props) =>{
    return( 
        <View style={styles.inputStyle}>
                <View style={{borderBottomWidth:1, borderBottomColor:'blue',marginBottom:16}}>
                    <Text style={{color:'blue',marginBottom:10,fontSize:20,fontWeight:'bold'}}> SignIn </Text>
                </View>
                <Field name="correo" component={fieldNombre} ph="correo@correo.com"/>
                <Field name="password" component={fieldNombre} ph="Contraseña"/>
                <Button
                    title='Ingresar'
                    onPress={
                        props.handleSubmit((values)=>{
                            console.log(values);
                        })
                    }
                />
        </View>
    );
}

const styles = StyleSheet.create({
    inputStyle:{ 
      marginBottom:16
    },
    message:{
      color:'red'
    }
  })

export default reduxForm({form:'SignInForm', validate})(SignInForm);
