import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import map from './mapDuck'
import year from './yearDuck'

const store = configureStore({
  reducer: {
    map: map.reducer,
    year: year.reducer
  },
  middleware: [
    ...getDefaultMiddleware()
  ],
  devTools: true
})

export default store
