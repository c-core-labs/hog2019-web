import { createSlice } from 'redux-starter-kit'
import { defaultViewport } from '../config'
import getCenter from '../utils/getCenter'

function changeLayer(state, action) {
  const { layer } = action.payload

  return { ...state, layer}
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
