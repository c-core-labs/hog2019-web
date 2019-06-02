import React from 'react'
import ReactMapboxGl from 'react-mapbox-gl'

import { accessToken } from '../config'
import GeoJsonLayer from './GeoJsonLayer'
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
      center={props.center}
      zoom={props.zoom}
    >
    <GeoJsonLayer
      id='sites'
    />
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
      label={'meters per second'}
    />
</Map>
  )
}

export default Maps
