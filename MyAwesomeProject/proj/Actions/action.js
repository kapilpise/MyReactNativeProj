import * as Constants from '../Constants/constants'

export function userLogin(email, password) {
    return (dispatch) => {
        dispatch(doLogin())
        var axios = require('axios')
        axios.get('https://reqres.in/api/login', {
            params: {
                email: email,
                password: password
            }
        }).then(function (response) {
            console.log("Status is: ", response.status);
            dispatch(loginSuccess(response))
        }).catch(function (error) {
            dispatch(loginFailure(error))
        });
    }
}

function doLogin() {
    return {
        type: Constants.LOGIN
    }
}

function loginSuccess(data) {
    return {
        type: Constants.LOGIN_SUCCESS,
        data: data
    }
}
function loginFailure(errMsg) {
    return {
        type: Constants.LOGIN_FAILURE,
        errMsg
    }
}