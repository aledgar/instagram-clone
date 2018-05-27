import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation';
import Follow from './Follow.js';

const TabFollow = createMaterialTopTabNavigator(
    {
        Follow:{ 
            screen:Follow
        },
        Followers:{
            screen:Follow
        }
    },
    {
        tabBarOptions: {
            // labelStyle: {
            //   fontSize: 12,
            // },
            // tabStyle: {
            //   width: 100,
            // },
            style: { 
                // marginTop:25,
                backgroundColor: '#581845',
                padding:30
            },
          }
    }
)

export {TabFollow};