import React, { Fragment } from 'react'
import { GeoJSONLayer } from 'react-mapbox-gl'

const makeUrl = ({ id }) =>
  `/${id}.geojson`

function handleClick (event) {
  window.open('/sample-report.pdf')
}

function handleHover (event) {
  event.target.getCanvas().style.cursor = 'pointer'
}

function handleMouseOut (event) {
  event.target.getCanvas().style.cursor = ''
}

function GeoJsonLayer (props) {
  const { id } = props

  const url = makeUrl({ id })

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
