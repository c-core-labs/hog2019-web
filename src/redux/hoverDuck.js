import { createSlice } from 'redux-starter-kit'

function changeHover (state, action) {
  const { label, value } = action.payload

  return { ...state, label, value }
}

const hover = createSlice({
  slice: 'hover',
  initialState: {
    label: null,
    value: null
  },
  reducers: {
    changeHover
  }
})

export default hover
