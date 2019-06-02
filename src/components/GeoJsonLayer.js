import React, { Component, Fragment } from 'react'
import { GeoJSONLayer, Source } from 'react-mapbox-gl'
import { useDispatch, useSelector } from 'react-redux'

import hover from '../redux/hoverDuck'

const makeUrl = ({ id }) =>
  //`https://s3-us-west-2.amazonaws.com/coresight-layers/hog2019/${id}.geojson`
  `/${id}.geojson`

function onMouseEnter (event) {
  console.log(event)
}

function GeoJsonLayer (props) {
  const dispatch = useDispatch()
  const { id } = props

  const url = makeUrl({ id })

  function handleClick (event) {
    window.open('/sample-report.pdf')
  }

  function handleHover (event) {
    const properties = event.features[0].properties
    // console.log(properties)

    event.target.getCanvas().style.cursor = 'pointer'
    // dispatch(hover.actions.changeHover({ label, value: properties[property] }))
  }

  function handleMouseOut (event) {
    event.target.getCanvas().style.cursor = ''
  }

  return (
    <Fragment>
      <GeoJSONLayer
        data={url}
        fillPaint={{
          'fill-opacity': 0.05,
          'fill-color': 'gray'
        }}
        fillOnClick={handleClick}
        fillOnMouseEnter={handleHover}
        fillOnMouseLeave={handleMouseOut}
      />
      <GeoJSONLayer
        data={url}
        linePaint={{
          'line-opacity': 1,
          'line-color': 'red'
        }}
      />
    </Fragment>
  )
}

export default GeoJsonLayer
