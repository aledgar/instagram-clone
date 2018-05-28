import { takeEvery, call } from 'redux-saga/effects';
import {autentication, dataBase} from '../Servicios/Firebase';

//SIGNUP

registroFireBase = (values) =>{
    autentication.createUserWithEmailAndPassword(values.correo,values.password)
    .then((success)=>{
        console.log('Desde then ',success);  
        const nombre = values.nombre;
        const correo = values.correo;
        dataBase.ref(`usuarios/${success.user.uid}`) 
        .set({
            nombre,
            correo 
        });        
    })     
    .catch((error)=>{    
                var errorCode = error.code;  
                var errorMessage = error.message;
                alert(error);
                console.log(error)  
                return error;   
            }) 
}

function* generadoraRegistro (values){
    try {
        const registryResult = yield call(registroFireBase, values.datos);
        console.log('Impresion desde log '+registryResult); 
    } catch (error) { 
        console.log(error);  
    }
    
}
  
//FIN_SIGNUP
 
//LOGIN
 
inicioLogin = (values) =>{
    console.log('funcion login ',values)
    autentication.signInWithEmailAndPassword(values.correo, values.password) 
        .then((success)=>{ 
            alert('Si entra');  
        })
        .catch((error)=>{
            var errorMessage = error.message;
            alert(errorMessage)
        })    
}
  
function* generadoraLogin(values){
    yield call(inicioLogin, values.datos);
    console.log('impresion desde login ',values.datos);
}

//FIN_LOGIN

export default function* funcionPrimaria(){
    yield takeEvery('REGISTRY', generadoraRegistro);
    yield takeEvery('LOGIN', generadoraLogin);
    console.log('Entra a la funcion primaria');
}