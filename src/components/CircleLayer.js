import React, { Component, Fragment } from 'react'
import { GeoJSONLayer, Source, Layer } from 'react-mapbox-gl'

const makeUrl = ({ id }) =>
      //`https://s3-us-west-2.amazonaws.com/coresight-layers/hog2019/${id}.geojson`
      `/${id}.geojson`

function CircleLayer(props) {
  const { id, property } = props

  const url = makeUrl({ id })
  const sourceId = `${id}-circle-source`
  const layerId = `${id}-circle`
  
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
        type='circle'
        id={layerId}
        sourceId={sourceId}
        onMouseEnter={console.log}
        filter={['==', 'time', 2100]}
        paint={{          
          'circle-color': [
            'interpolate',
            ['linear'],
            ['to-number', ['get', property]],
            0, 'blue',
            15, 'red'
            ]
        }}
      />
    </Fragment>
  )
}

export default CircleLayer
