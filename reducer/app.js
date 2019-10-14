import { Record } from 'immutable'

export const ReducerRecord = Record({
  token: null,
  testText: 'text'
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload } = action
  switch (type) {
    default:
      return state
  }
}