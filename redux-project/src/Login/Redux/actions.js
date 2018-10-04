export const LOGIN_PENDING = 'LOGIN PENDING';
export const LOGIN_SUCCESS = 'LOGIN SUCCESS';
export const LOGIN_FAILURE = 'LOGIN FAILURE';

export const loginRequest = ({ mail, password }) => {
    console.log(mail, password);
    //llamado a servicio ue verifica 
    //si los datos son correctos
    if(mail !== 'eibermanm') {
        return { type: LOGIN_FAILURE };
    }
    return { type: LOGIN_SUCCESS}
  };