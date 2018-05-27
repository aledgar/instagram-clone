import { takeEvery, call } from 'redux-saga/effects';
import {autentication} from '../Servicios/Firebase';

registroFireBase = (values) =>{
    autentication.createUserWithEmailAndPassword(values.correo,values.password)
        .then((success)=>{
            alert('Se registro el usuario.');
            console.log(success); 
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(error);
            console.log(error) 
        })
}

function* generadoraRegistro (values){
    yield call(registroFireBase, values.datos);
    console.log(values);
}

export default function* funcionPrimaria(){
    yield takeEvery('REGISTRY',generadoraRegistro);
    console.log('Entra a la funcion primaria');
}