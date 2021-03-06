import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Search from './Search';
import Publicacion from './Publicacion';
import Autor from './Profile';
import Comentarios from './Comentarios';

const StackSearch = createStackNavigator(
    {
        Search:{
            screen:Search
        },
        Publicacion:{
            screen:Publicacion
        },
        Autor:{
            screen:Autor
        },
        Comentarios:{
            screen:Comentarios
        }
    },
    {
        headerMode:'none'
    }
) 

export {StackSearch};
/*
Search
Publicacion
Autor
Comentarios
*/

