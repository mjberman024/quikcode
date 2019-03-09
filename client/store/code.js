const UPDATE_USER_CODE = 'UPDATE_USER_CODE'

const initialState = {
  userCode: []
}

export const updateUserCode = userCode => ({
  type: UPDATE_USER_CODE,
  userCode
})

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_CODE:
      return {userCode: action.userCode}
    default:
      return state
  }
}
