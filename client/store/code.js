const UPDATE_USER_CODE = 'UPDATE_USER_CODE'
const CHANGE_PROBLEM = 'CHANGE_PROBLEM'

const initialState = {
  problem: '',
  result: {},
  isError: ''
}

export const updateUserCode = (result, isError) => ({
  type: UPDATE_USER_CODE,
  result,
  isError
})

export const changeProblem = problem => ({
  type: CHANGE_PROBLEM,
  problem
})

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_CODE:
      return {...state, result: action.result, isError: action.isError}
    case CHANGE_PROBLEM:
      return {...state, problem: action.problem}
    default:
      return state
  }
}
