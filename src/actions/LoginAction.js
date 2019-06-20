import Api from '../common/Api';

export const LoginAction = (data) => dispatch => {
    console.log('data', data);
    Api.post('http://192.168.28.162:8880/CESPortal.Web.API/api/login/Login', data).then(response => {
            console.log('response', response);
            dispatch({
                type: 'FIRST_ACTION',
                payload: response
               });
        }).catch((ex) => {
            console.log('ex', ex);
        });
   };
