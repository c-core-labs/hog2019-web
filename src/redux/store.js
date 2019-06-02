import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import map from './mapDuck'
import year from './yearDuck'
import layer from './layerDuck'
import hover from './hoverDuck'

const store = configureStore({
  reducer: {
    map: map.reducer,
    year: year.reducer,
    layer: layer.reducer,
    hover: hover.reducer
  },
  middleware: [
    ...getDefaultMiddleware()
  ],
  devTools: true
})

export default store
