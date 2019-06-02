import React, { Component, Fragment } from 'react'
import { GeoJSONLayer, Source, Layer } from 'react-mapbox-gl'

const makeUrl = ({ id }) =>
      //`https://s3-us-west-2.amazonaws.com/coresight-layers/hog2019/${id}.geojson`
      `/${id}.geojson`

function HeatMapLayer(props) {
  const { id, property } = props

  const url = makeUrl({ id })
  const sourceId = `${id}-heatmap-source`
  const layerId = `${id}-heatmap`
  
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
      {/* <Layer */}
      {/*   key={layerId} */}
      {/*   type='circle' */}
      {/*   id={layerId} */}
      {/*   sourceId={sourceId} */}
      {/*   paint={{ */}
      {/*     'circle-color': 'red' */}
      {/*   }} */}
      {/* /> */}
      <Layer
        key={layerId+'heatmap'}
        type='heatmap'
        id={layerId+'heatmap'}
        sourceId={sourceId}
        onMouseEnter={console.log}
        paint={{
          /* "heatmap-color": [ */
          /*   "interpolate", */
          /*   ["linear"], */
          /*   ["heatmap-density"], */
          /*   0, "rgba(33,102,172,0)", */
          /*   5, "rgb(103,169,207)", */
          /*   10, "rgb(209,229,240)", */
          /*   15, "rgb(253,219,199)", */
          /*   20, "rgb(239,138,98)", */
          /*   25, "rgb(178,24,43)" */
          /* ], */
          /* "heatmap-radius": [ */
          /*   "interpolate", */
          /*   ["linear"], */
          /*   ["zoom"], */
          /*   0, 2, */
          /*   9, 20 */
          /* ], */
          /* "heatmap-opacity": [ */
          /*   "interpolate", */
          /*   ["linear"], */
          /*   ["zoom"], */
          /*   7, 1, */
          /*   9, 0 */
          /* ], */
          "heatmap-weight": [
            "interpolate",
            ["linear"],
            ["get", property],
            0, 0,
            10, 0.5,
            20, 1
          ],
        }}
      />
    </Fragment>
  )
}

export default HeatMapLayer
