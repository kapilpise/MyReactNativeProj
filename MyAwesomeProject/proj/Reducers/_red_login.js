import * as Constants from '../Constants/constants'
const initialState = {
    data:"",
    isLoading: false,
    isError: false,
    errMsg: "",
}
export default function loginReducer(state = initialState, action) {
    console.log("Init state :",state)
    switch (action.type) {
        case Constants.LOGIN:
            return {
                ...state,
                isLoading: true,
                data:""
            }
        case Constants.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.data
            }
        case Constants.LOGIN_FAILURE:
            return {
                state,
                isLoading: false,
                data:"",
                errMsg: action.errorMsg
            }
        default: return {
            state
        }
    }
}