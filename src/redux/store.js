import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import map from './mapDuck'

const store = configureStore({
  reducer: {
    map: map.reducer
  },
  middleware: [
    ...getDefaultMiddleware()
  ],
  devTools: true
})

export default store
