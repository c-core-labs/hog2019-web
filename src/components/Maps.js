import React from 'react'
import ReactMapboxGl from 'react-mapbox-gl'

import { accessToken } from '../config'
import GeoJsonLayer from './GeoJsonLayer'
import HeatMapLayer from './HeatMapLayer'
import CircleLayer from './CircleLayer'

const Map = ReactMapboxGl({
  accessToken,
  hash: true
})

function Maps(props) {
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "100vh",
        width: "100vw",       
      }}
      // onMove={(event, map) => console.log(event, map)}
      center={props.center}
      zoom={props.zoom}
    >
    <CircleLayer
        id='wind-potential'
        property='mean_temp'
    />
      <CircleLayer
        id='solar-potential'
        property='solar_pot'
      />
      <CircleLayer
        id='mean-cloud'
        property='mea_ncloud_pct'
      />
</Map>
  )
}

export default Maps
