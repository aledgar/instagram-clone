import {createStackNavigator} from 'react-navigation';
import {TabFollow} from './TabFollow';
import Perfil from './Profile';

const StackFollow = createStackNavigator(
    {
        TabFollow:{
            screen:TabFollow,
            navigationOptions:{
                header:null,
            }
        },
        Perfil:{
            screen:Perfil
        }
    },{
        // headerMode:'none'
    })
  
export {StackFollow};