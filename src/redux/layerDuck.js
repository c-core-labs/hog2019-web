import { createSlice } from 'redux-starter-kit'

function changeLayer (state, action) {
  const { layer } = action.payload

  return { ...state, layer }
}

const layer = createSlice({
  slice: 'layer',
  initialState: {
    layer: 'wind-potential'
  },
  reducers: {
    changeLayer
  }
})

export default layer
