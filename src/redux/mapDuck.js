import { createSlice } from 'redux-starter-kit'
import { defaultViewport } from '../config'
import getCenter from '../utils/getCenter'

function fetchMapSuccess(state, action) {
  const { results } = action.payload

  return { ...state, ...results, fetching: false, error: false }
}

function setBoundingBox(state, action) {
  const { boundingBox, zoom=16 } = action.payload
  const center = getCenter(boundingBox)

  const viewport = {
    ...center,
    zoom
  }
  
  return { ...state, viewport }
}

function setViewport(state, action) {
  const { viewport } = action.payload
  
  return { ...state, viewport }
}

function setItem(state, action) {
  const { item } = action.payload

  return { ...state, item }
}

const map = createSlice({
  slice: 'map',
  initialState: {
    fetching: false,
    error: false,
    viewport: defaultViewport,
    loading: true,
    map: {},
    item: null
  },
  reducers: {
    fetchMapSuccess,
    setBoundingBox,
    setViewport,
    setItem
  }
})

export default map
