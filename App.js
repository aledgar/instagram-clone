import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {RutasNoAutenticadas} from './Componentes/NoAutenticados/RutasNoAutenticadas';
import {RutasAutenticadas} from './Componentes/Autenticados/RutasAutenticadas';
import {Provider} from 'react-redux';
import Store from './Store/Store'; 

export default class App extends React.Component {

  constructor(){    
    super();            
    this.state = {  
      nombre:'Instagram clone'      
    };          
  }             
            
  render() {     
    return (     
      <View style={styles.container}>      
        {/* <Text>Hola...</Text> */}
        <Provider store={Store}>             
          <RutasNoAutenticadas/>
        </Provider>          
        {/* <RutasAutenticadas/>*/} 
      </View> 
    );         
  }   
}  

const styles = StyleSheet.create({  
  container: {
    flex: 1, 
    backgroundColor: '#fff'  
  },    
});
