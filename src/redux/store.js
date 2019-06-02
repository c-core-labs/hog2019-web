import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import map from './mapDuck'
import year from './yearDuck'
import layer from './layerDuck'

const store = configureStore({
  reducer: {
    map: map.reducer,
    year: year.reducer,
    layer: layer.reducer
  },
  middleware: [
    ...getDefaultMiddleware()
  ],
  devTools: true
})

export default store
