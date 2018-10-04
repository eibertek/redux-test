import  * as LocalActions from './actions';

const initialState = {
    loginStatus: false,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case LocalActions.LOGIN_PENDING:
        return { ...state }
    case LocalActions.LOGIN_SUCCESS:
        return { ...state, loginStatus: true }
    case LocalActions.LOGIN_FAILURE:
        return { ...state, loginStatus: false, error:'wrong Mail' }
    default:
        return state
  }
}
