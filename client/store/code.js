import Constants from '../Constants'

const UPDATE_USER_CODE = 'UPDATE_USER_CODE'
const GET_USER_RESULT = 'GET_USER_RESULT'
const CHANGE_PROBLEM = 'CHANGE_PROBLEM'

const initialState = {
  problem: '',
  usersCode: '',
  result: {},
  isError: ''
}

export const updateUserCode = code => ({
  type: UPDATE_USER_CODE,
  code
})

export const getUserResult = (result, isError) => ({
  type: GET_USER_RESULT,
  result,
  isError
})

export const changeProblem = problem => ({
  type: CHANGE_PROBLEM,
  problem
})

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER_RESULT:
      return {...state, result: action.result, isError: action.isError}
    case CHANGE_PROBLEM:
      return {
        ...state,
        usersCode: Constants.filter(
          item => action.problem === item.problemValue
        )[0].problemTemplate,
        problem: action.problem,
        result: {},
        isError: false
      }
    case UPDATE_USER_CODE:
      return {...state, usersCode: action.code}
    default:
      return state
  }
}
