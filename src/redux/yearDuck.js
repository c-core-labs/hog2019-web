import { createSlice } from 'redux-starter-kit'
import { defaultViewport } from '../config'
import getCenter from '../utils/getCenter'

function changeYear(state, action) {
  const { year } = action.payload

  return { ...state, year}
}

const year = createSlice({
  slice: 'year',
  initialState: {
    year: 2015
  },
  reducers: {
    changeYear
  }
})

export default year
