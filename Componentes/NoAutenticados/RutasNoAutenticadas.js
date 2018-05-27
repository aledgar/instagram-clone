import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {Text,View,Button} from 'react-native';
import SignIn from './SignIn';
import SignUp from './SignUp';

const RutasNoAutenticadas = createStackNavigator(
    {
        SignIn:{
            screen: SignIn
        },
        SignUp:{
            screen: SignUp
        }  
    },
    {
        headerMode:'none',
        navigationOptions:{
            title:"Titulo desde nav"
        }
    }
)

export {RutasNoAutenticadas};