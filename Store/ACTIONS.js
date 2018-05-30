import CONSTANTS from "./CONSTANTS";

export const actionRegistro = values =>({
    type:CONSTANTS.REGISTRY,
    datos: values
});

export const actionLogin = values => ({
    type:CONSTANTS.LOGIN,
    datos:values
});

export const session_starts = values => ({
    type:CONSTANTS.SESSION_START,
    user:values
});

export const session_finished = () =>({
    type:CONSTANTS.SESSION_FINISHED,
});

