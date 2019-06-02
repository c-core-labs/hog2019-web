import { createSlice } from 'redux-starter-kit'
import { defaultViewport } from '../config'
import getCenter from '../utils/getCenter'

function fetchMapSuccess (state, action) {
  const { results } = action.payload

  return { ...state, ...results, fetching: false, error: false }
}

function setBoundingBox (state, action) {
  const { boundingBox, zoom = 16 } = action.payload
  const center = getCenter(boundingBox)

  const viewport = {
    ...center,
    zoom
  }

  return { ...state, viewport }
}

function setViewport (state, action) {
  const { viewport } = action.payload
  const center = [viewport.longitude, viewport.latitude]
  const zoom = [viewport.zoom]

  return { ...state, viewport, center, zoom }
}

const map = createSlice({
  slice: 'map',
  initialState: {
    viewport: defaultViewport,
    center: [defaultViewport.longitude, defaultViewport.latitude],
    zoom: [defaultViewport.zoom],
    loading: true
  },
  reducers: {
    fetchMapSuccess,
    setBoundingBox,
    setViewport
  }
})

export default map
