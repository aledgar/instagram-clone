import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import funcionPrimaria from './Sagas/Sagas';
import CONSTANTS from './CONSTANTS';

const reducerPrueba = (state=[0], action) => {
    switch(action.type){
        case 'AUMENTAR_REDUCER_PRUEBA':
            const medida = state.length;
            const valor = state[medida-1]+1;
            return [...state,valor];
        default:
            return state;
    }
};

const reducerSession = (state=null, action) =>{
    switch(action.type){
        case CONSTANTS.SESSION_START:
            return action.user;  
        case CONSTANTS.SESSION_FINISHED:
            return null;
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    reducerSession,
    reducerPrueba,
    form
});
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(funcionPrimaria);
export default store;