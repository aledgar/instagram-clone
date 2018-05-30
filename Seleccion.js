import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import {autentication} from './Store/Servicios/Firebase'
import { RutasAutenticadas } from './Componentes/Autenticados/RutasAutenticadas';
import { RutasNoAutenticadas } from './Componentes/NoAutenticados/RutasNoAutenticadas';
import { session_starts, session_finished } from './Store/ACTIONS';

class Seleccion extends Component {

componentDidMount(){
    this.props.autenth();
} 

render() {
    return (
      <View style={styles.container}>
        {/* <RutasAutenticadas/> */}
        {this.props.user? <RutasAutenticadas/> : <RutasNoAutenticadas/>}
        {/* <RutasNoAutenticadas />           */}
      </View>
    )
  }
}    

 
const styles = StyleSheet.create({
    container:{
        flex:1
    }
}) 

const mapStateToProps = state =>{
    return{
        user: state.reducerSession  
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        autenth: () =>{
            autentication.onAuthStateChanged(function(user) {
                if (user) {
                  console.log(user.toJSON());
                  dispatch(session_starts(user));
                } else {   
                  console.log('No existe la sesión');
                  dispatch(session_finished());
                }
              }); 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Seleccion);