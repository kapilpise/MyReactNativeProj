import * as Constants from '../Constants/constants'

export function userLogin() {
    console.log("In userLogin");

    return (dispatch) => {
        dispatch(doLogin())
        var axios = require('axios')
        axios.get('https://swapi.co/api/people')
            .then(function (response) {
                // console.log("data In ",response.data.results);
                dispatch(loginSuccess(response.data.results))
            })
            .catch(function (error) {
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
        errMsg: errMsg
    }
}