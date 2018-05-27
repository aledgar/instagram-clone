import react from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import {StackHome} from './StackHome';
import {StackSearch} from './StackSearch';
import {StackFollow} from './StackFollow';
import Follow from './Follow';
import Add from './Add'; 
import Profile from './Profile';
import Search from './Search';

const RutasAutenticadas = createBottomTabNavigator (
    { 
        Home:{
            screen:StackHome
        }, 
        Search:{ 
            screen:StackSearch   
        },
        Add:{
            screen:Add
        },
        Follow:{
            screen:StackFollow
        },
        Profile:{
            screen:Profile
        }
    },
    {  
        animationEnabled:true   
    }
)

export {RutasAutenticadas};