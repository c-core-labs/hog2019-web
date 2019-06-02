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
      property='wind_potential'
      min={15551}
      max={45520}
      label={'kilowatts per year'}
    />
    <CircleLayer
      id='solar-potential'
      property='solar_pot'
      min={1285}
      max={3927}
      label={'kilowatts per year'}
    />
    <CircleLayer
      id='mean-cloud'
      property='mea_ncloud_pct'
      min={62}
      max={86}
      label={'percent'}
    />
    <CircleLayer
      id='mean-wind'
      property='mean_wind'
      min={8.1}
      max={11.2}
      label={'knots'}
    />
</Map>
  )
}

export default Maps
// mean_temp = 4.49, 22.47
// mean_wind = 8.1, 11.2
// wind_pot = 15551, 45520
// mean_cloud_pot = 62, 86
// solar_pot = 1285, 3927 
