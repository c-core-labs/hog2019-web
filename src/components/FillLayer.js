import React, { Fragment } from 'react'
import { Source, Layer } from 'react-mapbox-gl'
import { useDispatch, useSelector } from 'react-redux'

import year from '../redux/yearDuck'
import layer from '../redux/layerDuck'
import hover from '../redux/hoverDuck'

const makeUrl = ({ id }) => `/${id}.geojson`

function FillLayer (props) {
  const yearProps = useSelector(state => year.selectors.getYear(state))
  const layerProps = useSelector(state => layer.selectors.getLayer(state))
  const dispatch = useDispatch()

  const { id, property, min = 0, max = 100, label = 'Label' } = props

  function handleHover (event) {
    const properties = event.features[0].properties

    event.target.getCanvas().style.cursor = 'pointer'
    dispatch(hover.actions.changeHover({ label, value: properties[property] }))
  }

  function handleMouseOut (event) {
    event.target.getCanvas().style.cursor = ''
  }

  const visibility = layerProps.layer === id ? 'visible' : 'none'
  const url = makeUrl({ id })
  const sourceId = `${id}-fill-source`
  const layerId = `${id}-fill`

  return (
    <Fragment>
      <Source
        key={sourceId}
        id={sourceId}
        geoJsonSource={{
          type: 'geojson',
          data: url
        }}
      />
      <Layer
        key={layerId}
        type='line'
        id={layerId}
        sourceId={sourceId}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseOut}
        filter={['==', 'time', yearProps.year]}
        layout={{
          visibility: visibility
        }}
        paint={{
        }}
      />
    </Fragment>
  )
}

export default FillLayer
