import React, { Component, Fragment } from 'react'
import { GeoJSONLayer, Source } from 'react-mapbox-gl'

const makeUrl = ({ id }) =>
      //`https://s3-us-west-2.amazonaws.com/coresight-layers/hog2019/${id}.geojson`
      `/${id}.geojson`

function onMouseEnter(event) {
  console.log(event)
}

function GeoJsonLayer(props) {
  const { id } = props

  const url = makeUrl({ id })
  
  return (
    <GeoJSONLayer
      data={url}
      circlePaint={{
        'circle-opacity': 0.01,
        'circle-color': 'red'
      }}
      circleOnMouseClick={console.log}
      circleOnMouseEnter={onMouseEnter}
    />
  )
}

export default GeoJsonLayer
